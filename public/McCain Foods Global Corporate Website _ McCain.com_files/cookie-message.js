var g_C_TermsAndConditionsUrl = '//www.mccain.com/terms-and-conditions'
var g_C_PrivacyUrl = '//www.mccain.com/privacy'
var g_C_CookiesUrl = '//www.mccain.com/privacy/cookie-policy'
	
var g_mccainCookiebotDomains = [
	{
		group: 'c6149542-4517-4344-a972-6a673df664a6',
		domains: [
			{ value: 'mccain-pp-fr.omnixia.com' }, { value: 'stg-iis-pl-rt.mccain.com' }, { value: 'softlaunch-iis-ceu-rt-sk.mccain-sl.net' },
			{ value: 'mccain.fr', addGoogleConsent: true }, { value: 'pickersbymccain.com', addGoogleConsent: true }, { value: 'mccain.it', addGoogleConsent: true },
			{ value: 'mccain.be', addGoogleConsent: true }, { value: 'mccain.de', addGoogleConsent: true }, { value: 'nl.mccain.be', addGoogleConsent: true }, { value: 'mccain.nl', addGoogleConsent: true },
			{ value: 'mccain.co.jp' }, 
			{ value: 'mccain.gr', lang: 'el' }, { value: 'mccain.pl' }, { value: 'mccain.pt' }, 
			{ value: 'mccain.sk' }, { value: 'mccain.cz', lang: 'cs' }, { value: 'mccain.es' },
			{ value: 'horecaclub.cz', lang: 'cs', addGoogleConsent: true }, { value: 'horecaclub.sk', addGoogleConsent: true }, { value: 'mccain.ch', addGoogleConsent: true },
			{ value: 'mccainfoodservice.com' }, { value: 'stage-mccain-ceu-foodservice.euwest01.umbraco.io' }, { value: 'dev-mccain-ceu-foodservice.euwest01.umbraco.io' },
			{ value: 'mccainindia.com' }, { value: 'w2bdemo.com' },
			{ value: 'menu-upgrade.mccainfoodservice.eu', addGoogleConsent: true },
			{ value: 'mccain-pickers.euwest01.umbraco.io', addGoogleConsent: true }, { value: 'dev-mccain-pickers.euwest01.umbraco.io', addGoogleConsent: true }, { value: 'pickers.com', addGoogleConsent: true },
		]
	},
	{
		group: '5789cf4e-dfc7-4502-8dec-80f1e401722f',
		domains: [ { value: 'mccain.com' } ]
	},
	{
		group: '3696cbdb-6e67-4f9b-9dbf-3c858e69484f',
		domains: [{ value: 'stg-usafoodservice.mccain.com' }, { value: 'mccainusafoodservice.com' }, { value: 'mccainfoodservice.ca' }]
	},
	{
		group: '7aa0d90b-5506-41a0-8192-84feae53ae6c',
		domains: [{value: 'mccain.ca'}, {value: 'tastiez.com'}, {value: 'softlaunch-mccain-ca-new.mccain.com'}, {value: 'stg-iis-mccain-ca-new.mccain.com'}, , {value: 'dev-iis-mccain-ca-new.mccain.com'}, {value: 'localhost'}]
	}
]

var g_mccainCookieExcludeDomains = [
	'mccainfoodservice.co.uk'
]

var g_mccainGDPRRules = {
	'en': {
		message: 'We use cookies and other technologies to offer you the best experience online. By continuing to use our website, you agree to the use of cookies and other technologies. If you would like to know more about cookies and other technologies and how to manage them, please view our <a href="' + g_C_PrivacyUrl + '" target="_blank" class="cc-link">Global Privacy Policy</a>.',
		message_gdpr_changed: 'Our Terms and Conditions and Global Privacy Policy have recently changed. Please click <a href="' + g_C_TermsAndConditionsUrl + '" target="_blank" class="cc-link">Legal Information</a> and <a href="' + g_C_PrivacyUrl + '" target="_blank" class="cc-link">Global Privacy Policy</a> for more information.',
		message_gdpr: 'Your privacy is important to us. By submitting personal data or information to us, you agree this will be handled in accordance with the <a href="' + g_C_PrivacyUrl + '" target="_blank" class="cc-link">Global Privacy Policy</a>.',
		rules: [{ path: 'sites/en' }]
	},
	
	'cs': {
		message: 'Využíváme soubory cookies a další technologie, abychom vám mohli poskytnout co nejlepší online zážitek. Setrváním na našich webových stránkách souhlasíte s používáním souborů cookies a dalších technologií. Pokud se o cookies, dalších technologiích a o tom, jak je spravovat, chcete dozvědět více, přečtěte si naše <a href="' + g_C_PrivacyUrl + '">Obecné zásady ochrany osobních údajů</a> a <a href="' + g_C_CookiesUrl + '">Zásady používání souborů cookies</a>.',

		message_gdpr_changed: 'Naše smluvní podmínky a obecné zásady ochrany osobních údajů se nedávno změnily. Pro další informace klikněte na <a href="' + g_C_TermsAndConditionsUrl + '/" target="_blank" class="cc-link">Právní informace</a> a <a href="' + g_C_PrivacyUrl + '/" target="_blank" class="cc-link">Obecné zásady ochrany osobních údajů</a>.',

		message_gdpr: 'Vaše soukromí je pro nás důležité. Odesláním osobních údajů nebo informací souhlasíte s tím, že s nimi bude nakládáno v souladu s <a href="' + g_C_PrivacyUrl + '/" target="_blank" class="cc-link">Obecnými zásadami ochrany osobních údajů</a>.',

		rules: [{ host: 'cz' }]
	},

	'fr-ca': {
		message: 'Nous utilisons des témoins et d’autres technologies pour vous offrir la meilleure expérience en ligne. En continuant d’utiliser notre site Web, vous acceptez l’utilisation de témoins et d’autres technologies. Pour en savoir plus sur les témoins et les autres technologies et comment les gérer, veuillez consulter <a href="' + g_C_PrivacyUrl + '/fr-ca" target="_blank" class="cc-link">la Politique mondiale de confidentialité</a>.',
		message_gdpr_changed: 'Nos Conditions générales et notre Politique globale de confidentialité/Politique d’utilisation des cookies ont récemment changé. Cliquez sur <a href="' + g_C_TermsAndConditionsUrl + '/fr-ca" target="_blank" class="cc-link">Information légale</a> et sur <a href="' + g_C_PrivacyUrl + '/fr-ca" target="_blank" class="cc-link">Politique globale de confidentialité/Politique d’utilisation des cookies</a> pour plus d’information.',
		message_gdpr: 'Nous respectons votre vie privée. En nous soumettant des données ou des renseignements personnels, vous acceptez que ceux-ci soient traités conformément à la <a href="' + g_C_PrivacyUrl + '/fr-ca" target="_blank" class="cc-link">Politique mondiale de confidentialité</a>.',
		rules: [{ path: 'fr-ca' }, { path: 'fr', host: 'ca' }, { path: 'fr', host: 'com' }]
	},

	'fr': {
		message: 'Nous utilisons des cookies et d’autres technologies pour vous offrir la meilleure expérience de navigation. En continuant sur ce site, vous acceptez l’utilisation des cookies et d’autres technologies.Si vous souhaitez en savoir plus sur les cookies et autres technologies et la façon de les gérer, veuillez-vous référer à <a href="' + g_C_PrivacyUrl + '/fr" target="_blank" class="cc-link">la Politique mondiale de confidentialité</a>.',
		message_gdpr_changed: 'Nos conditions générales et notre Politique mondiale de confidentialité/Politique en termes de cookies ont récemment été modifiées. Veuillez cliquer sur <a href="' + g_C_TermsAndConditionsUrl + '/fr" target="_blank" class="cc-link">Informations légales</a> et <a href="' + g_C_PrivacyUrl + '/fr" target="_blank" class="cc-link">Global Privacy Policy/Cookie Policy</a> pour plus d’informations',
		message_gdpr: 'Nous respectons votre vie privée. En nous soumettant des données ou des informations personnelles, vous acceptez que celles-ci soient traitées conformément à la <a href="' + g_C_PrivacyUrl + '/fr" target="_blank" class="cc-link">Politique mondiale de confidentialité</a>. ',
		rules: [{ path: 'fr' }, { host: 'fr' }]
	},

	'bs': {
		message: 'Koristimo kolačiće i druge tehnologije kako bi vam ponudio najbolje iskustvo na mreži. Nastavkom korištenja naše web stranice slažete se sa korištenjem kolačića i drugih tehnologija.Ukoliko želite da saznate više o kolačićima i drugim tehnologijama i kako da njima upravljate, pogledajte našu <a href="' + g_C_PrivacyUrl + '/bs" target="_blank" class="cc-link">Globalna politika privatnosti</a>.',
		message_gdpr_changed: 'Naši uslovi i globalna politika privatnosti / politika kolačića su se nedavno promijenili. Kliknite na <a href="' + g_C_TermsAndConditionsUrl + '/bs" target="_blank" class="cc-link">pravne informacije</a> i <a href="' + g_C_PrivacyUrl + '/bs" target="_blank" class="cc-link">globalna politika privatnosti / politika kolačića</a> za više informacija',
		message_gdpr: 'Vaša privatnost nam je važna. Slanjem osobnih podataka ili informacija nama, slažete se da se sa njima postupa u skladu sa <a href="' + g_C_PrivacyUrl + '/bs" target="_blank" class="cc-link">Globalnom politikom privatnosti</a>.',
		rules: [{ host: 'bs' }]
	},

	'de': {
		message: 'Wir verwenden Cookies und andere Technologien, um Ihnen die beste Online-Erfahrung zu bieten. Mit der weiteren Nutzung unserer Website stimmen Sie der Verwendung von Cookies und anderen Technologien zu. Wenn Sie mehr über Cookies und andere Technologien und den Umgang damit erfahren möchten, lesen Sie bitte unsere <a href="' + g_C_PrivacyUrl + '/de" target="_blank" class="cc-link">Globale Datenschutzrichtlinie</a>.',
		message_gdpr_changed: 'Unsere Geschäftsbedingungen und die Globale Datenschutzrichtlinie/Cookie-Richtlinie haben sich kürzlich geändert. Bitte klicken Sie auf <a href="' + g_C_TermsAndConditionsUrl + '/de" target="_blank" class="cc-link">Rechtliche Informationen</a> und <a href="' + g_C_PrivacyUrl + '/de" target="_blank" class="cc-link">Globale Datenschutzrichtlinie/Cookie-Richtlinie</a> für weitere Informationen',
		message_gdpr: 'Der Schutz Ihrer Daten ist uns wichtig. Wenn Sie personenbezogene Daten oder Informationen an uns übermitteln, erklären Sie sich damit einverstanden, dass diese in Übereinstimmung mit der <a href="' + g_C_PrivacyUrl + '/de" target="_blank" class="cc-link">Globalen Datenschutzrichtlinie</a> behandelt werden.',
		rules: [{ host: 'de' }, { host: 'at' }]
	},

	'el': {
		message: 'Χρησιμοποιούμε cookies και άλλες τεχνολογίες για να σας προσφέρει την καλύτερη δυνατή ηλεκτρονική εμπειρία. Συνεχίζοντας να χρησιμοποιείτε τον ιστότοπό μας, συμφωνείτε με τη χρήση των cookies και άλλων τεχνολογιών. Εάν θα θέλατε να μάθετε περισσότερα σχετικά με τα cookies και άλλες τεχνολογίες, καθώς και τρόπους διαχείρισης αυτών, ανατρέξτε στην <a href="' + g_C_PrivacyUrl + '/el" target="_blank" class="cc-link">Παγκόσμια πολιτική απορρήτου μας</a>.',
		message_gdpr_changed: 'Οι Όροι και Προϋποθέσεις και η Παγκόσμια πολιτική απορρήτου/Πολιτική Cookies μας έχουν αλλάξει πρόσφατα. Για περισσότερες πληροφορίες κάντε κλικ στις <a href="' + g_C_TermsAndConditionsUrl + '/el" target="_blank" class="cc-link">Νομικές Πληροφορίες</a> και την <a href="' + g_C_PrivacyUrl + '/el" target="_blank" class="cc-link">Παγκόσμια πολιτική απορρήτου/Πολιτική Cookies</a>',
		message_gdpr: 'Η προστασία των προσωπικών σας δεδομένων είναι  σημαντική για εμάς. Υποβάλλοντας σε εμάς τα  προσωπικά σας  δεδομένα ή  πληροφορίες που σας αφορούν, συναινείτε  ότι θα διαχειριστούν σύμφωνα με την <a href="' + g_C_PrivacyUrl + '/el" target="_blank" class="cc-link">Παγκόσμια Πολιτική Απορρήτου</a>.',
		rules: [{ host: 'gr' }]
	},

	'es': {
		message: 'Usamos cookies y otras tecnologías para brindarle la mejor experiencia en línea. Al continuar utilizando nuestro sitio web, usted acepta el uso de cookies y otras tecnologías. Lea nuestra <a href="' + g_C_PrivacyUrl + '/es" target="_blank" class="cc-link">Política de Privacidad Global</a> para saber más sobre las cookies y otras tecnologías y la manera de administrarlas.',

		message_gdpr_changed: 'Nuestros Términos y condiciones así como nuestra Política de privacidad global/Política de cookies global han sido modificados recientemente. Haga clic en <a href="' + g_C_TermsAndConditionsUrl + '/es" target="_blank" class="cc-link">Información jurídica</a> y <a href="' + g_C_PrivacyUrl + '/es" target="_blank" class="cc-link">Política de privacidad global/Política de cookies global</a> para obtener más información.',

		message_gdpr: 'Su privacidad es importante para nosotros. Al enviarnos sus datos personales o información, usted acepta que se gestionará de acuerdo con la <a href="' + g_C_PrivacyUrl + '/es" target="_blank" class="cc-link">Política de privacidad global</a>.',
		rules: [{ host: 'es' }]
	},

	'es-la': {
		message: 'Usamos cookies y otras tecnologías para brindarle la mejor experiencia en línea. Al continuar utilizando nuestro sitio web, usted acepta el uso de cookies y otras tecnologías. Lea nuestra <a href="' + g_C_PrivacyUrl + '/es-la" target="_blank" class="cc-link">Política de Privacidad Global</a> para saber más sobre las cookies y otras tecnologías y la manera de administrarlas.',

		message_gdpr_changed: 'Nuestros Términos y condiciones y nuestra Política de privacidad global/Política de cookies se modificaron recientemente. Haga clic en <a href="' + g_C_TermsAndConditionsUrl + '/es-la" target="_blank" class="cc-link">Información legal</a> y <a href="' + g_C_PrivacyUrl + '/es-la" target="_blank" class="cc-link">Política de privacidad global/Política de cookies</a> para obtener más información.',

		message_gdpr: 'Su privacidad es importante para nosotros. Al enviarnos sus datos personales o información a, usted acepta que se manejará de acuerdo con la <a href="' + g_C_PrivacyUrl + '/es-la" target="_blank" class="cc-link">Política de privacidad global</a>.',
		rules: [{ host: 'co' }]
	},


	'hu': {
		message: 'A legjobb online élmény nyújtása érdekében cookie-kat és más technológiákat használunk. A webhelyünkön való böngészéssel Ön engedélyezi a cookie-k és más technológiák használatát. Amennyiben többet szeretne megtudni a cookie-król és más technológiákról, illetve azok használatáról, kérjük, tekintse meg <a href="' + g_C_PrivacyUrl + '/hu" target="_blank" class="cc-link">Globális Adatvédelmi Szabályzatunkat</a>.',

		message_gdpr_changed: 'Általános Szerződési Feltételeink és Globális Adatvédelmi Szabályzatunk/Cookie-kezelési Szabályzatunk a közelmúltban megváltozott. További tájékoztatásért kattintson a <a href="' + g_C_TermsAndConditionsUrl + '/hu" target="_blank" class="cc-link">Jogi tájékoztatás</a> és a <a href="' + g_C_PrivacyUrl + '/hu" target="_blank" class="cc-link">Globális Adatvédelmi Szabályzat/Cookie-kezelési Szabályzat</a> hivatkozásra',

		message_gdpr: 'Az Ön személyes adatainak védelme fontos számunkra. Azzal, hogy személyes adatokat vagy információkat ad át a mi részünkre, Ön beleegyezését adja, hogy azokat a <a href="' + g_C_PrivacyUrl + '/hu" target="_blank" class="cc-link">Globális Adatvédelmi Szabályzatnak</a>.',
		rules: [{ host: 'hu' }]
	},

	'it': {
		message: 'Utilizziamo i cookie e altre tecnologie per offrirti la migliore esperienza di navigazione possibile. Proseguendo sul nostro sito dichiari di accettare l’uso dei cookie e di altre tecnologie. Per maggiori informazioni su cookie e altre tecnologie e su come gestirli, ti invitiamo a leggere <a href="' + g_C_PrivacyUrl + '/it" target="_blank" class="cc-link">l’informativa globale sulla privacy</a>.',

		message_gdpr_changed: 'I nostri Termini e Condizioni e la nostra Informativa globale sulla privacy/Informativa globale sui cookies sono stati recentemente modificati. Per ulteriori informazioni, clicca su <a href="' + g_C_TermsAndConditionsUrl + '/it" target="_blank" class="cc-link">Note legali</a> e <a href="' + g_C_PrivacyUrl + '/it" target="_blank" class="cc-link">Informativa globale sulla privacy/Informativa globale sui cookies</a>',

		message_gdpr: 'La sua privacy è importante per noi. Fornendoci i suoi dati o le sue informazioni personali, accetta che gli stessi saranno gestiti in conformità con <a href="' + g_C_PrivacyUrl + '/it" target="_blank" class="cc-link">l’Informativa globale sulla privacy</a>.',

		rules: [{ host: 'it' }]
	},

	'jp': {
		message: '当社は最高のオンライン体験を提供するために、クッキーやその他の技術を使用しております。当ホームページのご利用の継続で、クッキーやその他の技術の使用に同意することになります。クッキーやその他の技術、またその管理方法について詳しく知りたい場合は、当社の<a href="' + g_C_PrivacyUrl + '/jp" target="_blank" class="cc-link">グローバルプライバシーポリシー</a>をお読みください。',

		message_gdpr_changed: '弊社は、先般、利用規約およびグローバルプライバシーポリシー/クッキーポリシーを変更しました。詳細情報については、<a href="' + g_C_TermsAndConditionsUrl + '/jp" target="_blank" class="cc-link">法律に関する情報</a>および<a href="' + g_C_PrivacyUrl + '/jp" target="_blank" class="cc-link">グローバルプライバシーポリシー/クッキーポリシー</a>をクリックしてください。',

		message_gdpr: 'お客様のプライバシーは、当社にとって重要です。お客様は、個人データまたは情報を当社に提出することにより、<a href="' + g_C_PrivacyUrl + '/jp" target="_blank" class="cc-link">グローバルプライバシーポリシー</a>に従って、処理されることに同意するものとします',
		rules: [{ host: 'jp' }]
	},

	'nl': {
		message: 'Wij gebruikt cookies en andere technologieën om u online de beste ervaring te bieden. Door onze website verder te gebruiken, gaat u akkoord met het gebruik van cookies en andere technologieën. Indien u meer informatie wenst over cookies en andere technologieën, en hoe wij deze beheren, gelieve dan het <a href="' + g_C_PrivacyUrl + '/nl" target="_blank" class="cc-link">Globaal Privacybeleid</a> te raadplegen.',

		message_gdpr_changed: 'Onze Voorwaarden en ons Globaal Privacybeleid/Cookiebeleid zijn onlangs gewijzigd. Klik op <a href="' + g_C_TermsAndConditionsUrl + '/nl" target="_blank" class="cc-link">Juridische informatie</a> en <a href="' + g_C_PrivacyUrl + '/nl" target="_blank" class="cc-link">Globaal Privacybeleid/Cookiebeleid</a> voor meer informatie.',

		message_gdpr: 'Uw privacy is belangrijk voor ons. Door uw persoonlijke gegevens of informatie aan ons voor te leggen, stemt u ermee dat deze zullen worden behandeld in overeenstemming met het <a href="' + g_C_PrivacyUrl + '/nl" target="_blank" class="cc-link">Globale Privacybeleid</a>.',
		rules: [{ host: 'nl' }]
	},

	'pl': {
		message: 'Nasza strona korzysta z plików cookie i innych technologii, aby zapewnić użytkownikom najlepsze doświadczenia podczas korzystania z Internetu. Przechodząc na naszą stronę, akceptujesz używanie plików cookie i innych technologii. Jeśli chcesz dowiedzieć się więcej o plikach cookie i innych technologiach oraz o zarządzaniu nimi, zapoznaj się z <a href="' + g_C_PrivacyUrl + '/pl" target="_blank" class="cc-link">Globalną polityką prywatności</a>.',

		message_gdpr_changed: 'Niedawno zmienił się nasz Regulamin oraz Globalna polityka prywatności / Polityka plików cookie. Kliknij w <a href="' + g_C_TermsAndConditionsUrl + '/pl" target="_blank" class="cc-link">Informacje prawne</a> i <a href="' + g_C_PrivacyUrl + '/pl" target="_blank" class="cc-link">Globalna polityka prywatności / Polityka plików cookie</a>, aby uzyskać więcej informacji.',

		message_gdpr: 'Kwestia Twojej prywatności jest dla nas ważna. Podając nam dane osobowe lub inne osobiste informacje, zgadzasz się, że będą one przetwarzane zgodnie z <a href="' + g_C_PrivacyUrl + '/pl" target="_blank" class="cc-link">Globalną polityką prywatności</a>.',

		rules: [{ host: 'pl' }]
	},

	'pn': {
		message: 'McCain ਤੁਹਾਨੂੰ ਆਨਲਾਈਨ ਸ੍ਰੇਸ਼ਠ ਅਨੁਭਵ ਦੇਣ ਲਈ ਕੂਕੀਜ਼ ਅਤੇ ਹੋਰ ਤਕਨੀਕਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਸਾਡੀ ਵੈੱਬਸਾਈਟ ਨੂੰ ਵਰਤਣਾ ਜਾਰੀ ਰੱਖਕੇ, ਤੁਸੀਂ ਕੂਕੀਜ਼ ਅਤੇ ਹੋਰ ਤਕਨੀਕਾਂ ਨੂੰ ਵਰਤਣ ਲਈ ਸਹਿਮਤ ਹੋ। ਜੇ ਤੁਸੀਂ ਕੂਕੀਜ਼ ਅਤੇ ਹੋਰ ਤਕਨੀਕਾਂ ਬਾਰੇ ਜਾਂ ਉਨ੍ਹਾਂ ਦਾ ਪ੍ਰਬੰਧ ਕਿਵੇਂ ਕਰਨਾ ਹੈ ਬਾਰੇ ਹੋਰ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਡੀ McCain ਗਲੋਬਲ ਨਿੱਜਤਾ ਨੀਤੀ (ਲਿੰਕ) ਦੇਖੋ (<a href="' + g_C_PrivacyUrl + '/pn" target="_blank" class="cc-link">link</a>)',

		message_gdpr_changed: 'ਸਾਡੇ ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ ਅਤੇ ਗਲੋਬਲ ਨਿੱਜਤਾ ਨੀਤੀ / ਕੂਕੀ ਨੀਤੀ ਨੂੰ ਹਾਲ ਹੀ ਵਿੱਚ ਬਦਲਿਆ ਗਿਆ ਹੈ। ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਕਿਰਪਾ ਕਰਕੇ <a href="' + g_C_TermsAndConditionsUrl + '/pn" target="_blank" class="cc-link">ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ</a> ਅਤੇ <a href="' + g_C_PrivacyUrl + '/pn" target="_blank" class="cc-link">ਗਲੋਬਲ ਨਿੱਜਤਾ ਨੀਤੀ / ਕੂਕੀ ਨੀਤੀ</a>ਤੇ ਕਲਿਕ ਕਰੋ।',

		message_gdpr: 'ਤੁਹਾਡੀ ਗੁਪਤਤਾ ਸਾਡੇ ਲਈ ਮਹੱਤਵਪੂਰਨ ਹੈ. ਸਾਨੂੰ ਆਪਣਾ ਨਿੱਜੀ ਡਾਟਾ ਜਾਂ ਜਾਣਕਾਰੀ ਸੌਂਪ ਕੇ, ਤੁਸੀਂ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ ਕਿ ਇਸ ਨੂੰ <a href="' + g_C_PrivacyUrl + '/pn" target="_blank" class="cc-link">ਗਲੋਬਲ ਨਿੱਜਤਾ ਨੀਤੀ</a> ਦੇ ਮੁਤਾਬਕ ਵਰਤਿਆ ਜਾਵੇਗਾ।',

		rules: [{ host: 'pn' }]
	},

	'gu': {
		message: 'તમને શ્રેષ્ઠ ઑનલાઇન અનુભવ પ્રદાન કરવા માટે McCain કૂકીઝ અને અન્ય વિવિધ ટેક્નોલોજીનો ઉપયોગ કરે છે. અમારી વેબસાઇટનો ઉપયોગ ચાલુ રાખીને, તમે કૂકીઝ અને અન્ય વિવિધ ટેક્નોલોજીના ઉપયોગ માટે સંમત થાઓ છો. જો તમે કૂકીઝ અને અન્ય વિવિધ ટેક્નોલોજી વિશે અને તેમને કેવી રીતે સંચાલિત કરવી તે વિશે વધુ જાણવા માગતા હોવ તો કૃપા કરીને અમારી McCain ગ્લોબલ ગોપનીયતા નીતિ (લિંક) જુઓ (<a href="' + g_C_PrivacyUrl + '/gu" target="_blank" class="cc-link">link</a>)',

		message_gdpr_changed: 'અમારા નિયમો અને શરતો અને વૈશ્વિક ગોપનીયતા પોલિસી/કુકી ની નીતિ હમણાં બદલવામાં આવી છે. મેહરબાની કરીને વધારે માહિતી મેળવવા માટે ક્લિક કરો <a href="' + g_C_TermsAndConditionsUrl + '/gu" target="_blank" class="cc-link">કાનૂની માહિતી / Legal Information</a> અને <a href="' + g_C_PrivacyUrl + '/gu" target="_blank" class="cc-link">વૈશ્વિક ગોપનીયતા પોલિસી/કુકી નીતિ </a>.',

		message_gdpr: 'તમારી ગોપનીયતા અમારા માટે મહત્વપૂર્ણ છે. અમને વ્યક્તિગત ડેટા અથવા માહિતી પૂરું પાડીને, તમે સંમત થાઓ છો કે આ <a href="' + g_C_PrivacyUrl + '/gu" target="_blank" class="cc-link">વૈશ્વિક ગોપનીયતા પોલિસી</a> સુસંગતતા સાથે વાપરવામાં આવશે."',

		rules: [{ host: 'gu' }]
	},

	'pt': {
		message: 'Nós usamos cookies e outras tecnologias para lhe oferecer a melhor experiência online. Ao continuar a usar o nosso website autoriza o uso de cookies e outras tecnologias. Caso queira saber mais sobre cookies e as outras tecnologias e como geri-las, por favor, consulte as nossas <a href="' + g_C_PrivacyUrl + '/pt" target="_blank" class="cc-link">Política Global de Privacidade</a>.',

		message_gdpr_changed: 'Os nossos Termos e Condições bem como a nossa Política Global de Privacidade/Cookies foram alterados recentemente. Por favor, clique em <a href="' + g_C_TermsAndConditionsUrl + '/pt" target="_blank" class="cc-link">Informação Legal</a> e <a href="' + g_C_PrivacyUrl + '/pt" target="_blank" class="cc-link">Política Global de Privacidade/Cookies</a> para obter mais informações.',

		message_gdpr: 'A sua privacidade é importante para nos. Ao submeter-nos os seus dados pessoais ou a sua informação pessoal, concorda que estes serão tratados em conformidade com a <a href="' + g_C_PrivacyUrl + '/pt" target="_blank" class="cc-link">Política Global de Privacidade</a>.',
		rules: [{ host: 'pt' }]
	},

	'pt-br': {
		message: 'Nós usamos cookies e outras tecnologias para lhe oferecer a melhor experiência online. Ao continuar a utilizar o nosso site, você concorda com a utilização de cookies e outras tecnologias. Se quiser saber mais sobre cookies e outras tecnologias e sobre como gerenciá-las, consulte nossa <a href="' + g_C_PrivacyUrl + '/pt-br" target="_blank" class="cc-link">Política global de privacidade</a>.',

		message_gdpr_changed: 'Nossos Termos e condições e Política Global de Privacidade/Política de Cookies foram alterados recentemente. Clique em <a href="' + g_C_TermsAndConditionsUrl + '/pt-br" target="_blank" class="cc-link">Informação Legal</a> e em <a href="' + g_C_PrivacyUrl + '/pt-br" target="_blank" class="cc-link">Política Global de Privacidade/Política de Cookies</a> para mais informações.',

		message_gdpr: 'Sua privacidade é importante para nós. Enviando dados ou informações pessoais à nós, você concorda que serão tratados de acordo com a <a href="' + g_C_PrivacyUrl + '/pt-br" target="_blank" class="cc-link">Política Global de Privacidade</a>.',

		rules: [{ host: 'br' }]
	},

	'ru': {
		message: 'Мы используем cookie-файлы и другие технологии, чтобы обеспечить максимально удобную работу с сайтом. Продолжая использовать наш сайт, вы соглашаетесь с применением cookie-файлов и других технологий. Для того чтобы узнать больше о cookie-файлах и других технологиях, а также о методах их использования ознакомьтесь с нашей <a href="' + g_C_PrivacyUrl + '/ru" target="_blank" class="cc-link">глобальной политикой конфиденциальности</a>.',

		message_gdpr_changed: 'В наши Условия и Глобальную политику конфиденциальности/Политику в отношении файлов cookiesнедавно были внесены изменения. Для получения более подробной информации нажмите <a href="' + g_C_TermsAndConditionsUrl + '/ru" target="_blank" class="cc-link">Юридическая информация</a> и <a href="' + g_C_PrivacyUrl + '/ru" target="_blank" class="cc-link">Глобальная политика конфиденциальности/Политика в отношении файлов cookies</a>',

		message_gdpr: 'Конфиденциальность Вашей информации важна для нас. Предоставляя нам персональные данные или информацию, Вы соглашаетесь на их обработку в соответствии с <a href="' + g_C_PrivacyUrl + '/ru" target="_blank" class="cc-link">Глобальной политикой конфиденциальности</a>.',

		rules: [{ host: 'ru' }]
	},

	'sk': {
		message: 'Využívame súbory cookie a iné technológie, aby vám priniesla ten najlepší zážitok online. Pokračovaním v používaní našej webovej lokality súhlasíte s využívaním súborov cookie a iných technológii. Ak by ste sa chceli dozvedieť viac o súboroch cookie a iných technológiách, ako aj o tom, ako ich spravovať, preštudujte si našu <a href="' + g_C_PrivacyUrl + '/sk" target="_blank" class="cc-link">Globálnu politiku ochrany osobných údajov</a>.',

		message_gdpr_changed: 'Naše obchodné podmienky a globálna politika ochrany osobných údajov / zásady používania súborov cookie sa zmenili. Prosím, kliknite na <a href="' + g_C_TermsAndConditionsUrl + '/sk" target="_blank" class="cc-link">Právne informácie</a> a <a href="' + g_C_PrivacyUrl + '/sk" target="_blank" class="cc-link">Globálna politika ochrany osobných údajov / zásady používania súborov cookie</a> a získajte viac informácií.',

		message_gdpr: 'Vaše súkromie je pre nás dôležité. Odoslaním osobných údajov súhlasíte s ich spracovaním v súlade s <a href="' + g_C_PrivacyUrl + '/sk" target="_blank" class="cc-link">Globálnou politikou ochrany osobných údajov</a>.',

		rules: [{ host: 'sk' }]
	},

	'zh': {
		message: '我们使用Cookie 和其他技术向您提供最佳的网络体验。如若继续使用我们的网站，即表示您同意使用 Cookie 和其他技术。如欲了解有关 Cookie 和其他技术及其管理方式的更多信息，请查看<a href="' + g_C_PrivacyUrl + '/zh-si" target="_blank" class="cc-link">全球隐私政策</a>',

		message_gdpr_changed: '我们的条款与条件及全球隐私政策/Cookie政策最近进行了更改。请点击 <a href="' + g_C_TermsAndConditionsUrl + '/zh-si" target="_blank" class="cc-link">法律信息</a> 和 <a href="' + g_C_PrivacyUrl + '/zh-si" target="_blank" class="cc-link">全球隐私政策/Cookie政策</a> 了解更多详情',

		message_gdpr: '您的隐私对于我们至关重要。您向 我们提交个人数据或信息，您即同意我们根据<a href="' + g_C_PrivacyUrl + '/zh-si" target="_blank" class="cc-link">全球隐私政策</a>处理该等数据或信息。',

		rules: [{ host: 'cn' }]
	},
};

var DOMReady = function (callback) {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        callback();
    } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState != "loading") {
                callback();
            }
        });
    }
};


DOMReady(function () {
	function loadCssFile(fileUrl, callback) {
		var exists = false

		var links = document.getElementsByTagName("link")
		i = links.length
		while (i--) {
			if (links[i].rel == 'stylesheet' && links[i].href == fileUrl) {
				exists = true
				break
			}
		}

		if (!exists) {
			var link = document.createElement("link");
			link.href = fileUrl;
			link.type = "text/css";
			link.rel = "stylesheet";
			link.onload = function () {
				if (typeof callback == 'function') {
					callback()
				}
			}
			document.getElementsByTagName("head")[0].appendChild(link);
		}
		else {
			if (typeof callback == 'function') {
				callback()
			}
        }
	}

	function detectLanguage() {
		var result = document.documentElement.lang

		if (!result)
			result = 'en'

		if (result.length > 2)
			result = result.substring(0, 2)

		return result
    }

    window['mccainGDPRObject'] = window['mccainGDPRObject'] || (function () {

		var C_Trigger_GDPR_Changed = false

		// Settings
        var global_settings = window['mccainGDPRSettings'] || {}

        var C_DelayTime = 500 //milliseconds

        var C_CP_CookieName = 'cookieconsent_status'
        var C_CP_CookieExpiry = 183

        var C_GDPR_CookieName = 'mccain_gdpr_v1'
        var C_GDPR_CookieExpiry = 183

        var C_GDPR_Info_CookieName = 'mccain_gdpr_info'
		var C_GDPR_Info_CookieExpiry = 0

		var cssFileUrl = '//www.mccain.com/css/gdpr.css?v=2.5'
		if (global_settings['css'])
			cssFileUrl = global_settings['css']

		// Cookiebot
		var currentDomain = window.location.hostname
		currentDomain = currentDomain.replace('www.', '').toLowerCase() //www cleanup

		function getCookiebotGroupId() {
			for (var i = 0; i < g_mccainCookiebotDomains.length; i++) {
				var domainValues = g_mccainCookiebotDomains[i].domains.map(function (item) { return item.value });

				if (domainValues.indexOf(currentDomain) > -1)
					return g_mccainCookiebotDomains[i].group;
			}
			return '';
        }

		var cookiebotGroup = getCookiebotGroupId();
		var cookiebotEnabledForCurrentDomain = (cookiebotGroup.length > 0);

		function initCookiebot() {
			if (cookiebotEnabledForCurrentDomain) {

				var domainData = g_mccainCookiebotDomains.filter(function (item) {
					return item.group == cookiebotGroup
				})[0].domains.filter(function (d) {
					return d.value == currentDomain
				})[0];

				var cookibotLanguage = domainData.lang;
				if (!cookibotLanguage)
					cookibotLanguage = detectLanguage();

				window['mccainCookiebotObject'] = window['mccainCookiebotObject'] || (function () {
					var script1 = document.createElement("script");
					script1.type = "text/javascript";
					script1.id = "Cookiebot"
					script1.src = "https://consent.cookiebot.com/uc.js"
					script1.dataset.cbid = cookiebotGroup
					script1.dataset.blockingmode = "auto"
					script1.dataset.culture = cookibotLanguage

					var head = document.getElementsByTagName('head')[0]

					var cookieBotScriptNode = head.insertBefore(script1, head.firstChild);
					
					if (domainData.addGoogleConsent) {
						var googleConsentScriptText = 'window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); }; gtag("consent", "default", { ad_personalization: "denied", ad_storage: "denied", ad_user_data: "denied", analytics_storage: "denied", functionality_storage: "denied", personalization_storage: "denied", security_storage: "granted", wait_for_update: 500, }); gtag("set", "ads_data_redaction", true); gtag("set", "url_passthrough", true);';
						var script2 = document.createElement("script");
						script2.textContent = googleConsentScriptText;
						script2.dataset.cookieconsent = "ignore";
						if (cookieBotScriptNode.nextSibling)
							head.insertBefore(script2, cookieBotScriptNode.nextSibling);
						else
							document.head.appendChild(script2);
					}
				})()
			}

			function handleCookieDeclaration() {
				var clickHandler = function (event) {

					var popupID = 'cookie-declaration-overlay-' + cookiebotGroup

					var popupInstance = document.getElementById(popupID)
					
					var pageTitle = 'Cookie Declaration'
					switch (cookibotLanguage) {
						case "de":
							pageTitle = 'Cookie-Erklärung'
							break;
						case "fr":
							pageTitle = 'Déclaration relative aux cookies'
							break;
						case "es":
							pageTitle = 'Declaración de cookies'
							break;
						case "it":
							pageTitle = 'Dichiarazione dei cookie'
							break;
						case "da":
							pageTitle = 'Cookiedeklaration'
							break;
					}

					if (!popupInstance) {
						loadCssFile(cssFileUrl, function () {
							var popup = document.createElement("div")
							popup.id = popupID
							popup.className = 'cd-overlay'

							var closeBtn = document.createElement('a')
							closeBtn.href = 'javascript:void(0)'
							closeBtn.className = 'cd-closebtn'
							closeBtn.onclick = function () {
								document.getElementById(popupID).style.display = 'none'
							}
							closeBtn.innerHTML = "&times;"
							popup.appendChild(closeBtn)

							var h1 = document.createElement("h1")
							h1.innerHTML = pageTitle
							h1.className = 'cd-title'

							var script2 = document.createElement("script");
							script2.type = "text/javascript";
							script2.id = "CookieDeclaration"
							script2.src = "https://consent.cookiebot.com/" + cookiebotGroup + "/cd.js"
							script2.dataset.culture = cookibotLanguage

							var popupContent = document.createElement("div")
							popupContent.className = 'cd-overlay-content'
							popupContent.appendChild(h1)
							popupContent.appendChild(script2)
							popup.appendChild(popupContent)

							document.body.appendChild(popup);

							popupInstance = document.getElementById(popupID)

							popupInstance.style.display = "block";
						})
					} else {
						popupInstance.style.display = "block";
					}


					event.preventDefault();
				};

				var anchors = document.getElementsByTagName("a");
				for (var i = 0; i < anchors.length; i++) {
					var current = anchors[i];

					if (current.href && current.href.indexOf('#cookie-declaration') > -1) {
						current.addEventListener('click', clickHandler, false);
					}
				}
			}
			setTimeout(handleCookieDeclaration, 500);
		}
		
		initCookiebot()

		var donotshowCookieMessage = g_mccainCookieExcludeDomains.indexOf(currentDomain) > -1

		// GDPR
		var show_CP_Message = (getCookie(C_CP_CookieName) !== 'dismiss') && !cookiebotEnabledForCurrentDomain && !donotshowCookieMessage
        var show_GDPR_Changed_Message = false 
		if (C_Trigger_GDPR_Changed) {
			show_GDPR_Changed_Message = getCookie(C_GDPR_CookieName) !== 'dismiss'
		}

        if (!show_CP_Message && !show_GDPR_Changed_Message) {
            return this;
        }

        function initAll() {

            window.cookieconsent = new McCainCookieConsent({})
            window.cookieconsent_gdpr = new McCainCookieConsent({})

            var host = window.location.host.toLowerCase() // e.g. mccain.com or mccain.ca
            var path = window.location.pathname.toLowerCase() // e.g. /fr/example/index.html
            if (path && !path.startsWith('/')) path = '/' + path

            function checkPath(rule) {
                if (!rule.path)
                    return true

                if (path && path.indexOf('/' + rule.path) == 0)
                    return true

                return false
            }

            function checkHost(rule) {
                if (!rule.host)
                    return true

                if (host && host.endsWith('.' + rule.host))
                    return true

                return false
            }

            function getLocalizedMessage(languageKey) {

                if (languageKey) {
                    detectedSettings = g_mccainGDPRRules[languageKey]
                }
                else {
                    // find setting from current url
                    var detectedSettings = null
					for (var property in g_mccainGDPRRules) {
						if (!g_mccainGDPRRules.hasOwnProperty(property)) continue;

						var settings = g_mccainGDPRRules[property]
                        var rules = settings.rules

                        var found = false
                        for (var i = 0; i < rules.length; i++) {
                            var rule = rules[i]

                            if (checkPath(rule) && checkHost(rule)) {
                                found = true
                                break
                            }
                        }

                        if (found) {
                            detectedSettings = settings
                            break
                        }
                    }
                }

				if (!detectedSettings) {
					// try detect by html lang attr
					var lang = detectLanguage()
					if (lang)
						detectedSettings = g_mccainGDPRRules[lang]
                }

				if (!detectedSettings)
					detectedSettings = g_mccainGDPRRules['en']

                return detectedSettings
            }


            var localizedMessages = getLocalizedMessage(global_settings['language'])

            // CP message
            if (show_CP_Message) {
                var cookieconsent_settings = {
                    layout: 'mccain-gdpr-close',
                    layouts: {
                        'mccain-gdpr-close': '{{messagelink}}{{close}}',
                    },
                    position: 'bottom',
                    palette: { "popup": { "background": '#000', "text": '#fff', "link": "#fff" } },
                    showLink: false,
                    content: {
                        message: localizedMessages.message,
                        close: '&times;',
                    },
                    cookie: {
                        expiryDays: C_CP_CookieExpiry,
                        name: C_CP_CookieName
                    }
                }

                if (global_settings['position'])
                    cookieconsent_settings.position = global_settings['position']

                setTimeout(function () {
                    window.cookieconsent.initialise(cookieconsent_settings)
                }, C_DelayTime)
                
            }

            // GDPR message
            var gdpr_popup_settings = global_settings['gdpr_popup']

            var background_color 
            var text_color
            var gdpr_popup_position
            var gdpr_popup_modal = true

            if (gdpr_popup_settings) {
                background_color = gdpr_popup_settings['background']
                text_color = gdpr_popup_settings['text']
                gdpr_popup_position = gdpr_popup_settings['position']
                if (typeof gdpr_popup_settings['modal'] !== 'undefined')
                    gdpr_popup_modal =  gdpr_popup_settings['modal']
            }

            if (!background_color)
                background_color = '#000'

            if (!text_color)
                text_color = '#fff'

            if (!gdpr_popup_position)
                gdpr_popup_position = 'top-left'


            var cookieconsent_settings_gdpr_changed = {
                layout: 'mccain-gdpr-close',
                layouts: {
                    'mccain-gdpr-close': '{{messagelink}}{{close}}',
                },
                position: gdpr_popup_position,
                palette: { "popup": { "background": background_color, "text": text_color, "link": text_color } },
                showLink: false,
                content: {
                    message: localizedMessages.message_gdpr_changed,
                    close: '&times;',
                },
                cookie: {
                    expiryDays: C_GDPR_CookieExpiry,
                    name: C_GDPR_CookieName
                },
                forceOpenEvenIfCookieExists: true,

                window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-gdpr-main cc-window ' + (gdpr_popup_modal ? 'cc-modal' : '') + ' {{classes}}"><!--googleoff: all--><div class="cc-modal-inner">{{children}}</div><!--googleon: all--></div>'
            }


            if (show_GDPR_Changed_Message) {
                setTimeout(function () {
                    window.cookieconsent_gdpr.initialise(cookieconsent_settings_gdpr_changed)
                }, C_DelayTime)
            }
        }

        loadCssFile(cssFileUrl, function () {
            initAll()
        })

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function setCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        return this;
    })();
})


/************************************************************************************
**
* Cookie Consent js
**
/************************************************************************************/

function McCainCookieConsent(cc) {
	// stop from running again, if accidently included more than once.
	if (cc.hasInitialised) return;

	var util = {
	// http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
	escapeRegExp: function(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	},

	hasClass: function(element, selector) {
		var s = ' ';

		var elementToCheck = element

		// ignore font tag
		while (elementToCheck.tagName === 'FONT') {
			elementToCheck = elementToCheck.parentNode
        }

		return elementToCheck.nodeType === 1 &&
			(s + elementToCheck.className + s).replace(/[\n\t]/g, s).indexOf(s + selector + s) >= 0;
	},

	addClass: function(element, className) {
		element.className += ' ' + className;
	},

	removeClass: function(element, className) {
		var regex = new RegExp('\\b' + this.escapeRegExp(className) + '\\b');
		element.className = element.className.replace(regex, '');
	},

	interpolateString: function(str, callback) {
		var marker = /{{([a-z][a-z0-9\-_]*)}}/ig;
		return str.replace(marker, function(matches) {
		return callback(arguments[1]) || '';
		})
	},

	getCookie: function(name) {
		var value = '; ' + document.cookie;
		var parts = value.split('; ' + name + '=');
		return parts.length != 2 ?
		undefined : parts.pop().split(';').shift();
	},

	setCookie: function(name, value, expiryDays, domain, path) {

		var cookie = [
		name + '=' + value
		];
		  		  
		if (expiryDays != 0) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + (expiryDays || 365));
			cookie.push('expires=' + exdate.toUTCString())
		}
		  
		cookie.push('path=' + (path || '/'))

		if (domain) {
		cookie.push('domain=' + domain);
		}
		document.cookie = cookie.join(';');
	},

	// only used for extending the initial options
	deepExtend: function(target, source) {
		for (var prop in source) {
		if (source.hasOwnProperty(prop)) {
			if (prop in target && this.isPlainObject(target[prop]) && this.isPlainObject(source[prop])) {
			this.deepExtend(target[prop], source[prop]);
			} else {
			target[prop] = source[prop];
			}
		}
		}
		return target;
	},

	// only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)
	throttle: function(callback, limit) {
		var wait = false;
		return function() {
		if (!wait) {
			callback.apply(this, arguments);
			wait = true;
			setTimeout(function() {
			wait = false;
			}, limit);
		}
		}
	},

	// only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)
	hash: function(str) {
		var hash = 0,
		i, chr, len;
		if (str.length === 0) return hash;
		for (i = 0, len = str.length; i < len; ++i) {
		chr = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + chr;
		hash |= 0;
		}
		return hash;
	},

	normaliseHex: function(hex) {
		if (hex[0] == '#') {
		hex = hex.substr(1);
		}
		if (hex.length == 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		return hex;
	},

	// used to get text colors if not set
	getContrast: function(hex) {
		hex = this.normaliseHex(hex);
		var r = parseInt(hex.substr(0, 2), 16);
		var g = parseInt(hex.substr(2, 2), 16);
		var b = parseInt(hex.substr(4, 2), 16);
		var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
		return (yiq >= 128) ? '#000' : '#fff';
	},

	// used to change color on highlight
	getLuminance: function(hex) {
		var num = parseInt(this.normaliseHex(hex), 16), 
			amt = 38,
			R = (num >> 16) + amt,
			B = (num >> 8 & 0x00FF) + amt,
			G = (num & 0x0000FF) + amt;
		var newColour = (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
		return '#'+newColour;
	},

	isMobile: function() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	},

	isPlainObject: function(obj) {
		// The code "typeof obj === 'object' && obj !== null" allows Array objects
		return typeof obj === 'object' && obj !== null && obj.constructor == Object;
	},
	};

	// valid cookie values
	cc.status = {
	deny: 'deny',
	allow: 'allow',
	dismiss: 'dismiss'
	};

	// detects the `transitionend` event name
	cc.transitionEnd = (function() {
	var el = document.createElement('div');
	var trans = {
		t: "transitionend",
		OT: "oTransitionEnd",
		msT: "MSTransitionEnd",
		MozT: "transitionend",
		WebkitT: "webkitTransitionEnd",
	};

	for (var prefix in trans) {
		if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] != 'undefined') {
		return trans[prefix];
		}
	}
	return '';
	}());

	cc.hasTransition = !!cc.transitionEnd;

	// array of valid regexp escaped statuses
	var __allowedStatuses = Object.keys(cc.status).map(util.escapeRegExp);

	// contains references to the custom <style> tags
	cc.customStyles = {};

	cc.Popup = (function() {

	var defaultOptions = {

		// if false, this prevents the popup from showing (useful for giving to control to another piece of code)
		enabled: true,

		// optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
		container: null,

		// defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
		cookie: {
		// This is the name of this cookie - you can ignore this
		name: 'cookieconsent_status',

		// This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
		path: '/',

		// This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
		//  - Guide to cookie domains - http://erik.io/blog/2014/03/04/definitive-guide-to-cookie-domains/
		domain: '',

		// The cookies expire date, specified in days (specify -1 for no expiry)
		expiryDays: 365,
		},

		// these callback hooks are called at certain points in the program execution
		onPopupOpen: function() {},
		onPopupClose: function() {},
		onInitialise: function(status) {},
		onStatusChange: function(status, chosenBefore) {},
		onRevokeChoice: function() {},

		// each item defines the inner text for the element that it references
		content: {
		header: 'Cookies used on the website!',
		message: 'This website uses cookies to ensure you get the best experience on our website.',
		dismiss: 'Got it!',
		allow: 'Allow cookies',
		deny: 'Decline',
		link: 'Learn more',
		href: 'http://cookiesandyou.com',
		close: '&#x274c;',
		},

		// This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
		// You can remove "{{header}}" and write the content directly inside the HTML if you want.
		//
		//  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
		//    and to set the focus to the first interactive control (http://w3c.github.io/aria-in-html/)
		elements: {
		header: '<span class="cc-header">{{header}}</span>&nbsp;',
		message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
		messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a></span>',
		dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
		allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
		deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
		link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
		close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',

		//compliance: compliance is also an element, but it is generated by the application, depending on `type` below
		},

		// The placeholders {{classes}} and {{children}} both get replaced during initialisation:
		//  - {{classes}} is where additional classes get added
		//  - {{children}} is where the HTML children are placed
		window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',

		// This is the html for the revoke button. This only shows up after the user has selected their level of consent
		// It can be enabled of disabled using the `revokable` option
		revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',

		// define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
		compliance: {
		'info': '<div class="cc-compliance">{{dismiss}}</div>',
		'opt-in': '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
		'opt-out': '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>',
		},

		// select your type of popup here
		type: 'info', // refers to `compliance` (in other words, the buttons that are displayed)

		// define layout layouts here
		layouts: {
		// the 'block' layout tend to be for square floating popups
		'basic': '{{messagelink}}{{compliance}}',
		'basic-close': '{{messagelink}}{{compliance}}{{close}}',
		'basic-header': '{{header}}{{message}}{{link}}{{compliance}}',

		// add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
		//'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',
		},

		// default layout (see above)
		layout: 'basic',

		// this refers to the popup windows position. we currently support:
		//  - banner positions: top, bottom
		//  - floating positions: top-left, top-right, bottom-left, bottom-right
		//
		// adds a class `cc-floating` or `cc-banner` which helps when styling
		position: 'bottom', // default position is 'bottom'

		// Available styles
		//    -block (default, no extra classes)
		//    -edgeless
		//    -classic
		// use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit.
		// Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
		theme: 'block',

		// The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
		// Note: by default, we animate the height of the popup from 0 to full size
		static: false,

		// if you want custom colours, pass them in here. this object should look like this.
		// ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
		//   {
		//     popup: {background: '#000000', text: '#fff', link: '#fff'},
		//     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
		//     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
		//   }
		// `highlight` is optional and extends `button`. if it exists, it will apply to the first button
		// only background needs to be defined for every element. if not set, other colors can be calculated from it
		palette: null,

		// Some countries REQUIRE that a user can change their mind. You can configure this yourself.
		// Most of the time this should be false, but the `cookieconsent.law` can change this to `true` if it detects that it should
		revokable: false,

		// if true, the revokable button will tranlate in and out
		animateRevokable: true,

		// used to disable link on existing layouts
		// replaces element messagelink with message and removes content of link
		showLink: true,

		// set value as scroll range to enable
		dismissOnScroll: false,

		// set value as time in milliseconds to autodismiss after set time
		dismissOnTimeout: false,

		// The application automatically decide whether the popup should open.
		// Set this to false to prevent this from happening and to allow you to control the behaviour yourself
		autoOpen: true,

		// By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
		// by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
		// 
		//     var instance = cookieconsent.factory(options);
		//     document.body.appendChild(instance.element);
		//
		autoAttach: true,

		// simple whitelist/blacklist for pages. specify page by:
		//   - using a string : '/index.html'           (matches '/index.html' exactly) OR
		//   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
		whitelistPage: [],
		blacklistPage: [],

		// If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
		// Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
		// handlers. You can use other pre-existing classes too. See `src/styles` folder.
		overrideHTML: null,
		  
		forceOpenEvenIfCookieExists: false
		  
	};

	function CookiePopup() {
		this.initialise.apply(this, arguments);
	}

	CookiePopup.prototype.initialise = function(options) {
		if (this.options) {
		this.destroy(); // already rendered
		}

		// set options back to default options
		util.deepExtend(this.options = {}, defaultOptions);

		// merge in user options
		if (util.isPlainObject(options)) {
		util.deepExtend(this.options, options);
		}

		// returns true if `onComplete` was called		  
		if (checkCallbackHooks.call(this)) {
		// user has already answered
		this.options.enabled = false;
		}
	  

		// apply blacklist / whitelist
		if (arrayContainsMatches(this.options.blacklistPage, location.pathname)) {
		this.options.enabled = false;
		}
		if (arrayContainsMatches(this.options.whitelistPage, location.pathname)) {
		this.options.enabled = true;
		}

		// the full markup either contains the wrapper or it does not (for multiple instances)
		var cookiePopup = this.options.window
		.replace('{{classes}}', getPopupClasses.call(this).join(' '))
		.replace('{{children}}', getPopupInnerMarkup.call(this));

		// if user passes html, use it instead
		var customHTML = this.options.overrideHTML;
		if (typeof customHTML == 'string' && customHTML.length) {
		cookiePopup = customHTML;
		}

		// if static, we need to grow the element from 0 height so it doesn't jump the page
		// content. we wrap an element around it which will mask the hidden content
		if (this.options.static) {
		// `grower` is a wrapper div with a hidden overflow whose height is animated
		var wrapper = appendMarkup.call(this, '<div class="cc-grower">' + cookiePopup + '</div>');

		wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)
		this.element = wrapper.firstChild; // get the `element` reference from the wrapper
		this.element.style.display = 'none';
		util.addClass(this.element, 'cc-invisible');
		} else {
		this.element = appendMarkup.call(this, cookiePopup);
		}

		applyAutoDismiss.call(this);

		applyRevokeButton.call(this);

		if (this.options.autoOpen) {
		this.autoOpen();
		}
	};

	CookiePopup.prototype.destroy = function() {
		if (this.onButtonClick && this.element) {
		this.element.removeEventListener('click', this.onButtonClick);
		this.onButtonClick = null;
		}

		if (this.dismissTimeout) {
		clearTimeout(this.dismissTimeout);
		this.dismissTimeout = null;
		}

		if (this.onWindowScroll) {
		window.removeEventListener('scroll', this.onWindowScroll);
		this.onWindowScroll = null;
		}

		if (this.onMouseMove) {
		window.removeEventListener('mousemove', this.onMouseMove);
		this.onMouseMove = null;
		}

		if (this.element && this.element.parentNode) {
		this.element.parentNode.removeChild(this.element);
		}
		this.element = null;

		if (this.revokeBtn && this.revokeBtn.parentNode) {
		this.revokeBtn.parentNode.removeChild(this.revokeBtn);
		}
		this.revokeBtn = null;

		removeCustomStyle(this.options.palette);
		this.options = null;
	};

	CookiePopup.prototype.open = function(callback) {
		if (!this.element) return;

		if (!this.isOpen()) {
		if (cc.hasTransition) {
			this.fadeIn();
		} else {
			this.element.style.display = '';
		}

		if (this.options.revokable) {
			this.toggleRevokeButton();
		}
		this.options.onPopupOpen.call(this);
		}

		return this;
	};

	CookiePopup.prototype.close = function(showRevoke) {
		if (!this.element) return;

		if (this.isOpen()) {
		if (cc.hasTransition) {
			this.fadeOut();
		} else {
			this.element.style.display = 'none';
		}

		if (showRevoke && this.options.revokable) {
			this.toggleRevokeButton(true);
		}
		this.options.onPopupClose.call(this);
		}

		return this;
	};

	CookiePopup.prototype.fadeIn = function() {
		var el = this.element;

		if (!cc.hasTransition || !el)
		return;

		// This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
		// 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
		// has a chance to run, then we run it ourselves
		if (this.afterTransition) {
		afterFadeOut.call(this, el)
		}

		if (util.hasClass(el, 'cc-invisible')) {
		el.style.display = '';

		if (this.options.static) {
			var height = this.element.clientHeight;
			this.element.parentNode.style.maxHeight = height + 'px';
		}

		var fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below

		// Although most browsers can handle values less than 20ms, it should remain above this value.
		// This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
		// If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
		// the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
		// its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway
		this.openingTimeout = setTimeout(afterFadeIn.bind(this, el), fadeInTimeout);
		}
	};

	CookiePopup.prototype.fadeOut = function() {
		var el = this.element;

		if (!cc.hasTransition || !el)
		return;

		if (this.openingTimeout) {
		clearTimeout(this.openingTimeout);
		afterFadeIn.bind(this, el);
		}

		if (!util.hasClass(el, 'cc-invisible')) {
		if (this.options.static) {
			this.element.parentNode.style.maxHeight = '';
		}

		this.afterTransition = afterFadeOut.bind(this, el);
		el.addEventListener(cc.transitionEnd, this.afterTransition);

		util.addClass(el, 'cc-invisible');
		}
	};

	CookiePopup.prototype.isOpen = function() {
		return this.element && this.element.style.display == '' && (cc.hasTransition ? !util.hasClass(this.element, 'cc-invisible') : true);
	};

	CookiePopup.prototype.toggleRevokeButton = function(show) {
		if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
	};

	CookiePopup.prototype.revokeChoice = function(preventOpen) {
		this.options.enabled = true;
		this.clearStatus();

		this.options.onRevokeChoice.call(this);

		if (!preventOpen) {
		this.autoOpen();
		}
	};

	// returns true if the cookie has a valid value
	CookiePopup.prototype.hasAnswered = function(options) {
		return Object.keys(cc.status).indexOf(this.getStatus()) >= 0;
	};

	// returns true if the cookie indicates that consent has been given
	CookiePopup.prototype.hasConsented = function(options) {
		var val = this.getStatus();
		return val == cc.status.allow || val == cc.status.dismiss;
	};

	// opens the popup if no answer has been given
	CookiePopup.prototype.autoOpen = function(options) {
		((!this.hasAnswered() && this.options.enabled) || this.options.forceOpenEvenIfCookieExists) && this.open();
	};

	CookiePopup.prototype.setStatus = function(status) {
		var c = this.options.cookie;
		var value = util.getCookie(c.name);
		var chosenBefore = Object.keys(cc.status).indexOf(value) >= 0;

		// if `status` is valid
		if (Object.keys(cc.status).indexOf(status) >= 0) {
		util.setCookie(c.name, status, c.expiryDays, c.domain, c.path);

		this.options.onStatusChange.call(this, status, chosenBefore);
		} else {
		this.clearStatus();
		}
	};

	CookiePopup.prototype.getStatus = function() {
		return util.getCookie(this.options.cookie.name);
	};

	CookiePopup.prototype.clearStatus = function() {
		var c = this.options.cookie;
		util.setCookie(c.name, '', -1, c.domain, c.path);
	};

	// This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
	// There is a good reason why it's called in a timeout. Read 'fadeIn';
	function afterFadeIn(el) {
		this.openingTimeout = null;
		util.removeClass(el, 'cc-invisible');
	}

	// This is called on 'transitionend' (only on the transition of the fadeOut). That's because after we've faded out, we need to
	// set the display to 'none' (so there aren't annoying invisible popups all over the page). If for whenever reason this function
	// is not called (lack of support), the open/close mechanism will still work.
	function afterFadeOut(el) {
		el.style.display = 'none'; // after close and before open, the display should be none
		el.removeEventListener(cc.transitionEnd, this.afterTransition);
		this.afterTransition = null;
	}

	// this function calls the `onComplete` hook and returns true (if needed) and returns false otherwise
	function checkCallbackHooks() {
		var complete = this.options.onInitialise.bind(this);

		if (!window.navigator.cookieEnabled) {
		complete(cc.status.deny);
		return true;
		}

		if (window.CookiesOK || window.navigator.CookiesOK) {
		complete(cc.status.allow);
		return true;
		}

		var allowed = Object.keys(cc.status);
		var answer = this.getStatus();
		var match = allowed.indexOf(answer) >= 0;

		if (match) {
		complete(answer);
		}
		return match;
	}

	function getPositionClasses() {
		var positions = this.options.position.split('-'); // top, bottom, left, right
		var classes = [];

		// top, left, right, bottom
		positions.forEach(function(cur) {
		classes.push('cc-' + cur);
		});

		return classes;
	}

	function getPopupClasses() {
		var opts = this.options;
		var positionStyle = (opts.position == 'top' || opts.position == 'bottom') ? 'banner' : 'floating';

		if (util.isMobile()) {
		positionStyle = 'floating';
		}

		var classes = [
		'cc-' + positionStyle, // floating or banner
		'cc-type-' + opts.type, // add the compliance type
		'cc-theme-' + opts.theme, // add the theme
		];

		if (opts.static) {
		classes.push('cc-static');
		}

		classes.push.apply(classes, getPositionClasses.call(this));

		// we only add extra styles if `palette` has been set to a valid value
		var didAttach = attachCustomPalette.call(this, this.options.palette);

		// if we override the palette, add the class that enables this
		if (this.customStyleSelector) {
		classes.push(this.customStyleSelector);
		}

		return classes;
	}

	function getPopupInnerMarkup() {
		var interpolated = {};
		var opts = this.options;

		// removes link if showLink is false
		if (!opts.showLink) {
		opts.elements.link = '';
		opts.elements.messagelink = opts.elements.message;
		}

		Object.keys(opts.elements).forEach(function(prop) {
		interpolated[prop] = util.interpolateString(opts.elements[prop], function(name) {
			var str = opts.content[name];
			return (name && typeof str == 'string' && str.length) ? str : '';
		})
		});

		// checks if the type is valid and defaults to info if it's not
		var complianceType = opts.compliance[opts.type];
		if (!complianceType) {
		complianceType = opts.compliance.info;
		}

		// build the compliance types from the already interpolated `elements`
		interpolated.compliance = util.interpolateString(complianceType, function(name) {
		return interpolated[name];
		});

		// checks if the layout is valid and defaults to basic if it's not
		var layout = opts.layouts[opts.layout];
		if (!layout) {
		layout = opts.layouts.basic;
		}

		return util.interpolateString(layout, function(match) {
		return interpolated[match];
		});
	}

	function appendMarkup(markup) {
		var opts = this.options;
		var div = document.createElement('div');
		var cont = (opts.container && opts.container.nodeType === 1) ? opts.container : document.body;

		div.innerHTML = markup;

		var el = div.children[0];

		el.style.display = 'none';

		if (util.hasClass(el, 'cc-window') && cc.hasTransition) {
		util.addClass(el, 'cc-invisible');
		}

		// save ref to the function handle so we can unbind it later
		this.onButtonClick = handleButtonClick.bind(this);

		el.addEventListener('click', this.onButtonClick);

		if (opts.autoAttach) {
		if (!cont.firstChild) {
			cont.appendChild(el);
		} else {
			cont.insertBefore(el, cont.firstChild)
		}
		}

		return el;
	}

	function handleButtonClick(event) {
		var targ = event.target;
		if (util.hasClass(targ, 'cc-btn')) {

		var matches = targ.className.match(new RegExp("\\bcc-(" + __allowedStatuses.join('|') + ")\\b"));
		var match = (matches && matches[1]) || false;

		if (match) {
			this.setStatus(match);
			this.close(true);
		}
		}
		if (util.hasClass(targ, 'cc-close')) {
		this.setStatus(cc.status.dismiss);
		this.close(true);
		}
		if (util.hasClass(targ, 'cc-revoke')) {
		this.revokeChoice();
		}
	}

	// I might change this function to use inline styles. I originally chose a stylesheet because I could select many elements with a
	// single rule (something that happened a lot), the apps has changed slightly now though, so inline styles might be more applicable.
	function attachCustomPalette(palette) {
		var hash = util.hash(JSON.stringify(palette));
		var selector = 'cc-color-override-' + hash;
		var isValid = util.isPlainObject(palette);

		this.customStyleSelector = isValid ? selector : null;

		if (isValid) {
		addCustomStyle(hash, palette, '.' + selector);
		}
		return isValid;
	}

	function addCustomStyle(hash, palette, prefix) {

		// only add this if a style like it doesn't exist
		if (cc.customStyles[hash]) {
		// custom style already exists, so increment the reference count
		++cc.customStyles[hash].references;
		return;
		}

		var colorStyles = {};
		var popup = palette.popup;
		var button = palette.button;
		var highlight = palette.highlight;

		// needs background colour, text and link will be set to black/white if not specified
		if (popup) {
		// assumes popup.background is set
		popup.text = popup.text ? popup.text : util.getContrast(popup.background);
		popup.link = popup.link ? popup.link : popup.text;
		colorStyles[prefix + '.cc-window'] = [
			'color: ' + popup.text,
			'background-color: ' + popup.background
		];
		colorStyles[prefix + '.cc-window .cc-modal-inner'] = [
			'color: ' + popup.text,
			'background-color: ' + popup.background
		];
		colorStyles[prefix + '.cc-revoke'] = [
			'color: ' + popup.text,
			'background-color: ' + popup.background
		];
		colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = [
			'color: ' + popup.link
		];

		if (button) {
			// assumes button.background is set
			button.text = button.text ? button.text : util.getContrast(button.background);
			button.border = button.border ? button.border : 'transparent';
			colorStyles[prefix + ' .cc-btn'] = [
			'color: ' + button.text,
			'border-color: ' + button.border,
			'background-color: ' + button.background
			];
			  
			if(button.background != 'transparent') 
			colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = [
				'background-color: ' + getHoverColour(button.background)
			];

			if (highlight) {
			//assumes highlight.background is set
			highlight.text = highlight.text ? highlight.text : util.getContrast(highlight.background);
			highlight.border = highlight.border ? highlight.border : 'transparent';
			colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = [
				'color: ' + highlight.text,
				'border-color: ' + highlight.border,
				'background-color: ' + highlight.background
			];
			} else {
			// sets highlight text color to popup text. background and border are transparent by default.
			colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = [
				'color: ' + popup.text
			];
			}
		}

		}

		// this will be interpretted as CSS. the key is the selector, and each array element is a rule
		var style = document.createElement('style');
		document.head.appendChild(style);

		// custom style doesn't exist, so we create it
		cc.customStyles[hash] = {
		references: 1,
		element: style.sheet
		};

		var ruleIndex = -1;
		for (var prop in colorStyles) {
		if (colorStyles.hasOwnProperty(prop)) {
			style.sheet.insertRule(prop + '{' + colorStyles[prop].join(';') + '}', ++ruleIndex);
		}
		}
	}

	function getHoverColour(hex) {
		hex = util.normaliseHex(hex);
		// for black buttons
		if (hex == '000000') {
		return '#222';
		}
		return util.getLuminance(hex);
	}

	function removeCustomStyle(palette) {
		if (util.isPlainObject(palette)) {
		var hash = util.hash(JSON.stringify(palette));
		var customStyle = cc.customStyles[hash];
		if (customStyle && !--customStyle.references) {
			var styleNode = customStyle.element.ownerNode;
			if (styleNode && styleNode.parentNode) {
			styleNode.parentNode.removeChild(styleNode);
			}
			cc.customStyles[hash] = null;
		}
		}
	}

	function arrayContainsMatches(array, search) {
		for (var i = 0, l = array.length; i < l; ++i) {
		var str = array[i];
		// if regex matches or string is equal, return true
		if ((str instanceof RegExp && str.test(search)) ||
			(typeof str == 'string' && str.length && str === search)) {
			return true;
		}
		}
		return false;
	}

	function applyAutoDismiss() {
		var setStatus = this.setStatus.bind(this);

		var delay = this.options.dismissOnTimeout;
		if (typeof delay == 'number' && delay >= 0) {
		this.dismissTimeout = window.setTimeout(function() {
			setStatus(cc.status.dismiss);
		}, Math.floor(delay));
		}

		var scrollRange = this.options.dismissOnScroll;
		if (typeof scrollRange == 'number' && scrollRange >= 0) {
		var onWindowScroll = function(evt) {
			if (window.pageYOffset > Math.floor(scrollRange)) {
			setStatus(cc.status.dismiss);

			window.removeEventListener('scroll', onWindowScroll);
			this.onWindowScroll = null;
			}
		};

		this.onWindowScroll = onWindowScroll;
		window.addEventListener('scroll', onWindowScroll);
		}
	}

	function applyRevokeButton() {
		// revokable is true if advanced compliance is selected
		if (this.options.type != 'info') this.options.revokable = true;
		// animateRevokable false for mobile devices
		if (util.isMobile()) this.options.animateRevokable = false;

		if (this.options.revokable) {
		var classes = getPositionClasses.call(this);
		if (this.options.animateRevokable) {
			classes.push('cc-animate');
		}
		if (this.customStyleSelector) {
			classes.push(this.customStyleSelector)
		}
		var revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' '));
		this.revokeBtn = appendMarkup.call(this, revokeBtn);

		var btn = this.revokeBtn;
		if (this.options.animateRevokable) {
			var wait = false;
			var onMouseMove = util.throttle(function(evt) {
			var active = false;
			var minY = 20;
			var maxY = (window.innerHeight - 20);

			if (util.hasClass(btn, 'cc-top') && evt.clientY < minY) active = true;
			if (util.hasClass(btn, 'cc-bottom') && evt.clientY > maxY) active = true;

			if (active) {
				if (!util.hasClass(btn, 'cc-active')) {
				util.addClass(btn, 'cc-active');
				}
			} else {
				if (util.hasClass(btn, 'cc-active')) {
				util.removeClass(btn, 'cc-active');
				}
			}
			}, 200);

			this.onMouseMove = onMouseMove;
			window.addEventListener('mousemove', onMouseMove);
		}
		}
	}

	return CookiePopup
	}());

	cc.Location = (function() {

	// An object containing all the location services we have already set up.
	// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
	// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.

	// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
	// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
	// with the data (or Error), and `cookieconsent.locate` will take care of the rest
	var defaultOptions = {

		// The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
		// Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
		// app will take `timeout` milliseconds to react to a JSONP network error.
		timeout: 5000,

		// the order that services will be attempted in
		services: [
		'freegeoip',
		'ipinfo',
		'maxmind'

		/*

		// 'ipinfodb' requires some options, so we define it using an object
		// this object will be passed to the function that defines the service

		{
			name: 'ipinfodb',
			interpolateUrl: {
			// obviously, this is a fake key
			api_key: 'vOgI3748dnIytIrsJcxS7qsDf6kbJkE9lN4yEDrXAqXcKUNvjjZPox3ekXqmMMld'
			},
		},

		// as well as defining an object, you can define a function that returns an object

		function () {
			return {name: 'ipinfodb'};
		},

		*/
		],

		serviceDefinitions: {

		freegeoip: function() {
			return {
			// This service responds with JSON, but they do not have CORS set, so we must use JSONP and provide a callback
			// The `{callback}` is automatically rewritten by the tool
			url: '//freegeoip.net/json/?callback={callback}',
			isScript: true, // this is JSONP, therefore we must set it to run as a script
			callback: function(done, response) {
				try{
				var json = JSON.parse(response);
				return json.error ? toError(json) : {
					code: json.country_code
				};
				} catch (err) {
				return toError({error: 'Invalid response ('+err+')'});
				}
			}
			}
		},

		ipinfo: function() {
			return {
			// This service responds with JSON, so we simply need to parse it and return the country code
			url: '//ipinfo.io',
			headers: ['Accept: application/json'],
			callback: function(done, response) {
				try{
				var json = JSON.parse(response);
				return json.error ? toError(json) : {
					code: json.country
				};
				} catch (err) {
				return toError({error: 'Invalid response ('+err+')'});
				}
			}
			}
		},

		// This service requires an option to define `key`. Options are proived using objects or functions
		ipinfodb: function(options) {
			return {
			// This service responds with JSON, so we simply need to parse it and return the country code
			url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
			isScript: true, // this is JSONP, therefore we must set it to run as a script
			callback: function(done, response) {
				try{
				var json = JSON.parse(response);
				return json.statusCode == 'ERROR' ? toError({error: json.statusMessage}) : {
					code: json.countryCode
				};
				} catch (err) {
				return toError({error: 'Invalid response ('+err+')'});
				}
			}
			}
		},

		maxmind: function() {
			return {
			// This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
			// make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
			url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
			isScript: true, // this service responds with a JavaScript file, so it must be run as a script
			callback: function(done) {
				// if everything went okay then `geoip2` WILL be defined
				if (!window.geoip2) {
				done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
				return;
				}

				geoip2.country(function(location) {
				try {
					done({
					code: location.country.iso_code
					});
				} catch (err) {
					done(toError(err));
				}
				}, function(err) {
				done(toError(err));
				});

				// We can't return anything, because we need to wait for the second AJAX call to return.
				// Then we can 'complete' the service by passing data or an error to the `done` callback.
			}
			}
		},
		},
	};

	function Location(options) {
		// Set up options
		util.deepExtend(this.options = {}, defaultOptions);

		if (util.isPlainObject(options)) {
		util.deepExtend(this.options, options);
		}

		this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
	}

	Location.prototype.getNextService = function() {
		var service;

		do {
		service = this.getServiceByIdx(++this.currentServiceIndex);
		} while (this.currentServiceIndex < this.options.services.length && !service);

		return service;
	};

	Location.prototype.getServiceByIdx = function(idx) {
		// This can either be the name of a default locationService, or a function.
		var serviceOption = this.options.services[idx];

		// If it's a string, use one of the location services.
		if (typeof serviceOption === 'function') {
		var dynamicOpts = serviceOption();
		if (dynamicOpts.name) {
			util.deepExtend(dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts));
		}
		return dynamicOpts;
		}

		// If it's a string, use one of the location services.
		if (typeof serviceOption === 'string') {
		return this.options.serviceDefinitions[serviceOption]();
		}

		// If it's an object, assume {name: 'ipinfo', ...otherOptions}
		// Allows user to pass in API keys etc.
		if (util.isPlainObject(serviceOption)) {
		return this.options.serviceDefinitions[serviceOption.name](serviceOption);
		}

		return null;
	};

	// This runs the service located at index `currentServiceIndex`.
	// If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully
	Location.prototype.locate = function(complete, error) {
		var service = this.getNextService();

		if (!service) {
		error(new Error('No services to run'));
		return;
		}

		this.callbackComplete = complete;
		this.callbackError = error;

		this.runService(service, this.runNextServiceOnError.bind(this));
	};

	// Potentially adds a callback to a url for jsonp.
	Location.prototype.setupUrl = function(service) {
		var serviceOpts = this.getCurrentServiceOpts();
		return service.url.replace(/\{(.*?)\}/g, function(_, param) {
		if (param === 'callback') {
			var tempName = 'callback' + Date.now();
			window[tempName] = function(res) {
			service.__JSONP_DATA = JSON.stringify(res);
			}
			return tempName;
		}
		if (param in serviceOpts.interpolateUrl) {
			return serviceOpts.interpolateUrl[param];
		}
		});
	};

	// requires a `service` object that defines at least a `url` and `callback`
	Location.prototype.runService = function(service, complete) {
		var self = this;

		// basic check to ensure it resembles a `service`
		if (!service || !service.url || !service.callback) {
		return;
		}

		// we call either `getScript` or `makeAsyncRequest` depending on the type of resource
		var requestFunction = service.isScript ? getScript : makeAsyncRequest;

		var url = this.setupUrl(service);

		// both functions have similar signatures so we can pass the same arguments to both
		requestFunction(url, function(xhr) {
		// if `!xhr`, then `getScript` function was used, so there is no response text
		var responseText = xhr ? xhr.responseText : '';

		// if the resource is a script, then this function is called after the script has been run.
		// if the script is JSONP, then a time defined function `callback_{Date.now}` has already
		// been called (as the JSONP callback). This callback sets the __JSONP_DATA property
		if (service.__JSONP_DATA) {
			responseText = service.__JSONP_DATA;
			delete service.__JSONP_DATA;
		}

		// call the service callback with the response text (so it can parse the response)
		self.runServiceCallback.call(self, complete, service, responseText);

		}, this.options.timeout, service.data, service.headers);

		// `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
	};

	// The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
	// We need to run its callback which determines if its successful or not
	// `complete` is called on success or failure
	Location.prototype.runServiceCallback = function(complete, service, responseText) {
		var self = this;
		// this is the function that is called if the service uses the async callback in its handler method
		var serviceResultHandler = function (asyncResult) {
		// if `result` is a valid value, then this function shouldn't really run
		// even if it is called by `service.callback`
		if (!result) {
			self.onServiceResult.call(self, complete, asyncResult)
		}
		};

		// the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
		// or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready
		var result = service.callback(serviceResultHandler, responseText);

		if (result) {
		this.onServiceResult.call(this, complete, result);
		}
	};

	// This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
	// `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data
	Location.prototype.onServiceResult = function(complete, result) {
		// convert result to nodejs style async callback
		if (result instanceof Error || (result && result.error)) {
		complete.call(this, result, null);
		} else {
		complete.call(this, null, result);
		}
	};

	// if `err` is set, the next service handler is called
	// if `err` is null, the `onComplete` handler is called with `data`
	Location.prototype.runNextServiceOnError = function(err, data) {
		if (err) {
		this.logError(err);

		var nextService = this.getNextService();

		if (nextService) {
			this.runService(nextService, this.runNextServiceOnError.bind(this));
		} else {
			this.completeService.call(this, this.callbackError, new Error('All services failed'));
		}
		} else {
		this.completeService.call(this, this.callbackComplete, data);
		}
	};

	Location.prototype.getCurrentServiceOpts = function() {
		var val = this.options.services[this.currentServiceIndex];

		if (typeof val == 'string') {
		return {name: val};
		}

		if (typeof val == 'function') {
		return val();
		}

		if (util.isPlainObject(val)) {
		return val;
		}

		return {};
	};

	// calls the `onComplete` callback after resetting the `currentServiceIndex`
	Location.prototype.completeService = function(fn, data) {
		this.currentServiceIndex = -1;

		fn && fn(data);
	};

	Location.prototype.logError = function (err) {
		var idx = this.currentServiceIndex;
		var service = this.getServiceByIdx(idx);

		console.error('The service[' + idx + '] (' + service.url + ') responded with the following error', err);
	};

	function getScript(url, callback, timeout) {
		var timeoutIdx, s = document.createElement('script');

		s.type = 'text/' + (url.type || 'javascript');
		s.src = url.src || url;
		s.async = false;

		s.onreadystatechange = s.onload = function() {
		// this code handles two scenarios, whether called by onload or onreadystatechange
		var state = s.readyState;

		clearTimeout(timeoutIdx);

		if (!callback.done && (!state || /loaded|complete/.test(state))) {
			callback.done = true;
			callback();
			s.onreadystatechange = s.onload = null;
		}
		};

		document.body.appendChild(s);

		// You can't catch JSONP Errors, because it's handled by the script tag
		// one way is to use a timeout
		timeoutIdx = setTimeout(function () {
		callback.done = true;
		callback();
		s.onreadystatechange = s.onload = null;
		}, timeout);
	}

	function makeAsyncRequest(url, onComplete, timeout, postData, requestHeaders) {
		var xhr = new(window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');

		xhr.open(postData ? 'POST' : 'GET', url, 1);

		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		if (Array.isArray(requestHeaders)) {
		for (var i = 0, l = requestHeaders.length; i < l; ++i) {
			var split = requestHeaders[i].split(':', 2)
			xhr.setRequestHeader(split[0].replace(/^\s+|\s+$/g, ''), split[1].replace(/^\s+|\s+$/g, ''));
		}
		}

		if (typeof onComplete == 'function') {
		xhr.onreadystatechange = function() {
			if (xhr.readyState > 3) {
			onComplete(xhr);
			}
		};
		}

		xhr.send(postData);
	}

	function toError(obj) {
		return new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);
	}

	return Location;
	}());

	cc.Law = (function() {

	var defaultOptions = {
		// Make this false if you want to disable all regional overrides for settings.
		// If true, options can differ by country, depending on their cookie law.
		// It does not affect hiding the popup for countries that do not have cookie law.
		regionalLaw: true,

		// countries that enforce some version of a cookie law
		hasLaw: ['AT', 'BE', 'BG', 'HR', 'CZ', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'SK', 'SI', 'ES', 'SE', 'GB', 'UK'],

		// countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
		revokable: ['HR', 'CY', 'DK', 'EE', 'FR', 'DE', 'LV', 'LT', 'NL', 'PT', 'ES'],

		// countries that say that a person can only "consent" if the explicitly click on "I agree".
		// in these countries, consent cannot be implied via a timeout or by scrolling down the page
		explicitAction: ['HR', 'IT', 'ES'],
	};

	function Law(options) {
		this.initialise.apply(this, arguments);
	}

	Law.prototype.initialise = function(options) {
		// set options back to default options
		util.deepExtend(this.options = {}, defaultOptions);

		// merge in user options
		if (util.isPlainObject(options)) {
		util.deepExtend(this.options, options);
		}
	};

	Law.prototype.get = function(countryCode) {
		var opts = this.options;
		return {
		hasLaw: opts.hasLaw.indexOf(countryCode) >= 0,
		revokable: opts.revokable.indexOf(countryCode) >= 0,
		explicitAction: opts.explicitAction.indexOf(countryCode) >= 0,
		};
	};

	Law.prototype.applyLaw = function(options, countryCode) {
		var country = this.get(countryCode);

		if (!country.hasLaw) {
		// The country has no cookie law
		options.enabled = false;
		}

		if (this.options.regionalLaw) {
		if (country.revokable) {
			// We must provide an option to revoke consent at a later time
			options.revokable = true;
		}

		if (country.explicitAction) {
			// The user must explicitly click the consent button
			options.dismissOnScroll = false;
			options.dismissOnTimeout = false;
		}
		}
		return options;
	};

	return Law;
	}());

	// This function initialises the app by combining the use of the Popup, Locator and Law modules
	// You can string together these three modules yourself however you want, by writing a new function.
	cc.initialise = function(options, complete, error) {
	var law = new cc.Law(options.law);

	if (!complete) complete = function() {};
	if (!error) error = function() {};

	cc.getCountryCode(options, function(result) {
		// don't need the law or location options anymore
		delete options.law;
		delete options.location;

		if (result.code) {
		options = law.applyLaw(options, result.code);
		}

		complete(new cc.Popup(options));
	}, function(err) {
		// don't need the law or location options anymore
		delete options.law;
		delete options.location;

		error(err, new cc.Popup(options));
	});
	};

	// This function tries to find your current location. It either grabs it from a hardcoded option in
	// `options.law.countryCode`, or attempts to make a location service request. This function accepts
	// options (which can configure the `law` and `location` modules) and fires a callback with which
	// passes an object `{code: countryCode}` as the first argument (which can have undefined properties)
	cc.getCountryCode = function(options, complete, error) {
	if (options.law && options.law.countryCode) {
		complete({
		code: options.law.countryCode
		});
		return;
	}
	if (options.location) {
		var locator = new cc.Location(options.location);
		locator.locate(function(serviceResult) {
		complete(serviceResult || {});
		}, error);
		return;
	}
	complete({});
	};

	// export utils (no point in hiding them, so we may as well expose them)
	cc.utils = util;

	// prevent this code from being run twice
	cc.hasInitialised = true;

	return cc

}


if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}
	
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
