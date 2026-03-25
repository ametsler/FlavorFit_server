import process from 'process';
import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Link,
  Font
} from '@react-email/components';

interface Props {
  userName: string;
  url: string;
}

export default function ResetPasswordEmail({ userName, url }: Props) {
  return (
		<Html>
			<Head>
				<Font fontFamily="Arial" fallbackFontFamily="sans-serif" />
			</Head>
			<Body>
				<Container style={styles.container}>
					<Heading style={styles.greeting}>Уважаемый(ая), {userName},</Heading>

					<Text style={styles.text}>
						Мы получили запрос на смену пароля для вашего аккаунта{' '}
						<strong>{process.env.APP_NAME}</strong>. Для обеспечения
						безопасности вашей учетной записи мы отправляем вам это письмо для
						сброса пароля.
					</Text>

					<Text style={styles.text}>
						Чтобы сбросить пароль, выполните следующие действия:
					</Text>

					<Text style={styles.text}>
						<ul style={{ ...styles.list, paddingLeft: '20px' }}>
							<li>
								Нажмите на ссылку ниже, чтобы перейти на страницу сброса пароля:
								<Link
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									style={styles.linkButton}
								>
									Ссылка для сброса пароля
								</Link>
							</li>
							<li>Введите новый пароль в соответствующее поле.</li>
							<li>
								Нажмите кнопку "Подтвердить", чтобы установить новый пароль.
							</li>
						</ul>
					</Text>

					<Text style={styles.text}>
						Обратите внимание, что ваш новый пароль должен соответствовать
						следующим требованиям:
					</Text>

					<Text style={styles.text}>
						<ul
							style={{
								...styles.requirementsList,
								paddingLeft: '20px',
								listStyleType: 'disc'
							}}
						>
							<li>Минимум 8 символов</li>
							<li>Содержать хотя бы одну заглавную букву</li>
							<li>Содержать хотя бы одну строчную букву</li>
							<li>Содержать хотя бы одну цифру</li>
						</ul>
					</Text>

					<Text style={styles.text}>
						Если у вас возникли вопросы или вам нужна помощь в сбросе пароля,
						пожалуйста, свяжитесь с нашей службой поддержки.
					</Text>

					<Text style={styles.signature}>
						С наилучшими пожеланиями,
						<br />
						команда {process.env.APP_NAME}
					</Text>
				</Container>
			</Body>
		</Html>
	)
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  } as React.CSSProperties,
  greeting: {
    color: '#285430',
    fontSize: '24px',
    marginBottom: '16px'
  },
  text: {
    fontSize: '16px',
    color: '#444',
    margin: '12px 0'
  },
  list: {
    margin: '12px 0',
    paddingLeft: '20px'
  },
  requirementsList: {
    margin: '12px 0',
    paddingLeft: '20px',
    listStyleType: 'disc'
  },
  linkButton: {
    display: 'inline-block',
    padding: '12px 24px',
    margin: '12px 0',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#285430',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    textAlign: 'center' as const
  },
  signature: {
    color: '#285430',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '24px',
    textAlign: 'right' as const
  }
};
