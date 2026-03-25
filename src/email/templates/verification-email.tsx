import process from 'process'
import * as React from 'react'
import {
	Html,
	Head,
	Body,
	Container,
	Heading,
	Text,
	Link,
	Font
} from '@react-email/components'

interface Props {
	userName: string
	url: string
}
export default function VerificationEmail({ userName, url }: Props) {
	return (
		<Html>
			<Head>
				<Font fontFamily="Arial" fallbackFontFamily="sans-serif" />
			</Head>
			<Body>
				<Container style={styles.container}>
					<Heading style={styles.greeting}>Уважаемый(ая), {userName},</Heading>

					<Text style={styles.text}>Спасибо, что присоединились к нам!</Text>
					<Text style={styles.text}>
						Чтобы завершить регистрацию, подтвердите свой адрес электронной
						почты, перейдя по ссылке ниже:
					</Text>

					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						style={styles.linkButton}
					>
						ссылка для подтверждения
					</Link>

					<Text style={styles.text}>
						или скопируйте следующую ссылку и вставьте её в адресную строку
						браузера:
					</Text>

					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						style={styles.linkLabel}
					>
						{url}
					</Link>

					<Text style={styles.signature}>
						С наилучшими пожеланиями, команда {process.env.APP_NAME}.
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
	linkButton: {
		display: 'inline-block',
		padding: '12px 24px',
		margin: '16px 0',
		fontSize: '16px',
		color: '#fff',
		backgroundColor: '#285430',
		textDecoration: 'none',
		borderRadius: '6px',
		fontWeight: 'bold',
		textAlign: 'center' as const
	},
	linkLabel: {
		display: 'block',
		color: '#1a73e8',
		textDecoration: 'underline',
		fontSize: '14px',
		margin: '8px 0 16px'
	},
	signature: {
		color: '#285430',
		fontWeight: 'bold',
		fontSize: '16px',
		marginTop: '24px',
		textAlign: 'right' as const
	}
}
