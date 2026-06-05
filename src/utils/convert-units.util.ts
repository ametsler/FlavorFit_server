import { Unit } from 'prisma/generated/prisma/enums'

interface UnitFactors {
	[key: string]: {
		toBase: number
		baseUnit: Unit
	}
}

/**
 * Коэффициенты конвертации единиц измерения в базовые единицы (кг, л)
 * Граммы конвертируются в кг (делим на 1000)
 * Миллилитры конвертируются в литры (делим на 1000)
 * Штуки и другие единицы, которые невозможно однозначно конвертировать, возвращают null
 */
const unitFactors: UnitFactors = {
  // Вес
  [Unit.GRAM]: { toBase: 1 / 1000, baseUnit: Unit.KILOGRAM },
  [Unit.KILOGRAM]: { toBase: 1, baseUnit: Unit.KILOGRAM },

  // Объем
  [Unit.MILLILITER]: { toBase: 1 / 1000, baseUnit: Unit.LITER },
  [Unit.LITER]: { toBase: 1, baseUnit: Unit.LITER },

  // Обиходные меры объема (приблизительные значения для стандартной ложки/стакана)
  [Unit.TEASPOON]: { toBase: 1 / 5, baseUnit: Unit.LITER }, // 1 ч.л. ≈ 5 мл
  [Unit.TABLESPOON]: { toBase: 1 / 15, baseUnit: Unit.LITER }, // 1 ст.л. ≈ 15 мл
  [Unit.DESSERTSPOON]: { toBase: 1 / 50, baseUnit: Unit.LITER }, // 1 дес.л. ≈ 50 мл (упрощенно)
  [Unit.GLASS]: { toBase: 1 / 200, baseUnit: Unit.LITER }, // 1 стакан ≈ 200 мл

  // Порционные меры (предполагаем средний вес/объем)
  [Unit.PIECE]: { toBase: 0.15, baseUnit: Unit.KILOGRAM }, // 1 шт ≈ 150г (средний вес)
  [Unit.CLOVE]: { toBase: 1 / 1000, baseUnit: Unit.KILOGRAM }, // 1 зубчик чеснока ≈ 1г
  [Unit.PINCH]: { toBase: 1 / 10000, baseUnit: Unit.KILOGRAM }, // щепотка ≈ 0.1г
  [Unit.BUNCH]: { toBase: 0.1, baseUnit: Unit.KILOGRAM }, // 1 пучок ≈ 100г
  [Unit.TWIG]: { toBase: 0.05, baseUnit: Unit.KILOGRAM }, // 1 веточка ≈ 50г
  [Unit.LEAF]: { toBase: 0.5, baseUnit: Unit.KILOGRAM }, // 1 лист (лавровый) ≈ 500г (вес лаврового листа)
  [Unit.ROOT]: { toBase: 0.1, baseUnit: Unit.KILOGRAM }, // 1 корень ≈ 100г
  [Unit.TUBER]: { toBase: 0.2, baseUnit: Unit.KILOGRAM }, // 1 клубень ≈ 200г
  [Unit.HEAD]: { toBase: 0.3, baseUnit: Unit.KILOGRAM }, // 1 головка ≈ 300г
  [Unit.SLICE]: { toBase: 0.05, baseUnit: Unit.KILOGRAM }, // 1 долька/ломтик ≈ 50г
  [Unit.POD]: { toBase: 0.05, baseUnit: Unit.KILOGRAM }, // 1 стручок ≈ 50г
  [Unit.CAN]: { toBase: 0.4, baseUnit: Unit.KILOGRAM }, // 1 банка ≈ 400г
  [Unit.PACK]: { toBase: 0.5, baseUnit: Unit.KILOGRAM }, // 1 пачка/упаковка ≈ 500г
  [Unit.BAR]: { toBase: 0.1, baseUnit: Unit.KILOGRAM }, // 1 плитка ≈ 100г
  [Unit.CUBE]: { toBase: 0.01, baseUnit: Unit.KILOGRAM }, // 1 кубик ≈ 10г
  [Unit.DROP]: { toBase: 1 / 20000, baseUnit: Unit.LITER }, // 1 капля ≈ 0.05мл
}

/**
 * Конвертирует количество из одной единицы измерения в базовую единицу (кг или л)
 * @param quantity - количество продукта
 * @param unit - единица измерения из enum Unit
 * @returns конвертированное количество в базовой единице (кг или л) или null, если конвертация невозможна
 */
export function convertToBaseUnit(quantity: number, unit: Unit): number | null {
  if (quantity <= 0) return 0

  const factor = unitFactors[unit]
  if (!factor) {
    // Единицы, которые нельзя однозначно конвертировать (по вкусу, по желанию и т.д.)
    return null
  }

  return quantity * factor.toBase
}

/**
 * Конвертирует количество из одной единицы измерения в другую
 * @param quantity - количество продукта
 * @param fromUnit - исходная единица измерения
 * @param toUnit - целевая единица измерения
 * @returns конвертированное количество или null, если конвертация невозможна
 */
export function convertUnit(
  quantity: number,
  fromUnit: Unit,
  toUnit: Unit
): number | null {
  if (quantity <= 0) return 0

  const fromFactor = unitFactors[fromUnit]
  const toFactor = unitFactors[toUnit]

  if (!fromFactor || !toFactor) {
    return null
  }

  // Конвертируем в базовую единицу, затем в целевую
  const baseQuantity = quantity * fromFactor.toBase
  return baseQuantity / toFactor.toBase
}

/**
 * Проверяет, можно ли конвертировать единицы измерения между собой
 * (оба должны быть одного типа: вес/объем/штуки)
 */
export function canConvertUnits(unit1: Unit, unit2: Unit): boolean {
  const factor1 = unitFactors[unit1]
  const factor2 = unitFactors[unit2]

  if (!factor1 || !factor2) {
    return false
  }

  // Проверяем, что единицы одного типа (обе весовые или обе объемные)
  return factor1.baseUnit === factor2.baseUnit
}
