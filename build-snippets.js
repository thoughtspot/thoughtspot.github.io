const folder = process.argv.pop()
const path = require('path')
const {readdirSync, readFileSync, writeFileSync, mkdirSync, unlinkSync, existsSync} = require('fs')
const basePath = path.join(__dirname, '') + '/' + folder
const outputPath = basePath + '/embed-snippets'
try {
	if (!folder || !existsSync(outputPath))
		mkdirSync(outputPath)
} catch(e) {
	return
}
const docsBaseUrl = 'https://docs.thoughtspot.com/latest'
const embedTemplate = `
<!DOCTYPE html>
<html>
	<head>
		<title>$title</title>
	</head>
	<body>
		$html
		<p><a href="$docsUrl" target="_blank">View full documentation.</a></p>
	</body>
</html>
`
const getFilesAndDirectories = (directoryPath, includeFiles = false) => {
	return readdirSync(directoryPath, {withFileTypes: true})
		.filter(file => {
			// Don't do the embed snippets dir
			if (file.name == 'embed-snippets')
				return false
			if (!file.isDirectory() && path.extname(file.name).toLowerCase() !== '.html')
				return false
			// Include files if flag is true, otherwise only include if is directory.
			return includeFiles ? true : file.isDirectory()
		})
		.map(file => {
			if (file.isDirectory()) {
				return {dirname: file.name, filesAndFolders: getFilesAndDirectories(`${directoryPath}/${file.name}`, true)}
			} else {
				return file.name
			}
		})
}
const generateFileSnippets = (path, file) => {
	let sourceHtml = readFileSync(`${basePath}${path}/${file}`).toString()
	const htmlRows = sourceHtml.split('\n')
	const shortcodeRows = []
	htmlRows.forEach((row, i) => {
		const matches = row.trim().match(/<p>.*?\[embed.+?label\=\"(.*?)\"\].*?<\/p>|\[\/embed\]/)
		if (matches) {
			// Open tag
			if (matches[1]) {
				shortcodeRows.push({label: matches[1], startIndex: i})
			// Close tag
			} else {
				shortcodeRows[shortcodeRows.length-1].endIndex = i
			}
		}
	})
	// Generate output HTML
	shortcodeRows.forEach(shortcodeRow => {
		// If we don't have a start and an end index, skip it.
		if (!(shortcodeRow.startIndex && shortcodeRow.endIndex))
			return
		const outputHtmlRows = htmlRows.slice(shortcodeRow.startIndex+1, shortcodeRow.endIndex)
		let outputHtml = embedTemplate
			.replace('$title', shortcodeRow.label)
			.replace('$html', outputHtmlRows.join('\n'))
			.replace('$docsUrl', `${docsBaseUrl}${path}/${file}#${shortcodeRow.label}`)
		const fileNameArray = file.split('.')
		fileNameArray[fileNameArray.length-2] += `__${shortcodeRow.label}`
		const snippetFileName = fileNameArray.join('.')
		mkdirSync(`${outputPath}${path}`, {recursive: true})
		writeFileSync(`${outputPath}${path}/${snippetFileName}`, outputHtml)
	})
	if (shortcodeRows.length) {
		console.log('generateFileSnippets', path, file)
		// Clean up source HTML
		shortcodeRows.forEach(shortcodeRow => {
			htmlRows[shortcodeRow.startIndex] = ''
			htmlRows[shortcodeRow.endIndex] = ''
		})
		sourceHtml = htmlRows.filter(row => row).join('\n')
		writeFileSync(`${basePath}${path}/${file}`, sourceHtml)
	}
}
const generateSnippets = (filesAndFolders, currentPath) => {
	filesAndFolders.forEach(fileOrFolder => {
		if (fileOrFolder.dirname) {
			const newCurrentPath = `${currentPath}/${fileOrFolder.dirname}`
			generateSnippets(fileOrFolder.filesAndFolders, newCurrentPath)
		} else {
			try {
				generateFileSnippets(currentPath, fileOrFolder)
			} catch (e) {}
		}
	})
}
// const generateTestData = () => {
// 	let filePath = `${basePath}/admin/mobile/use-mobile.html`
// 	let sourceHtml = readFileSync(filePath).toString()
// 	sourceHtml = sourceHtml.replace('<h3 id="for-administrators">For administrators:</h3>', `
// 		<p>[embed label="for-administrators"]</p>
// 		<h3 id="for-administrators">For administrators:</h3>`)
// 	sourceHtml = sourceHtml.replace('<h3 id="for-users">For users:</h3>', `
// 		<p>[/embed]</p>
// 		<h3 id="for-users">For users:</h3>`)
// 	writeFileSync(filePath, sourceHtml)
// 	filePath = `${basePath}/admin/mobile/install-mobile.html`
// 	sourceHtml = readFileSync(filePath).toString()
// 	sourceHtml = sourceHtml.replace('<h2 id="install-the-app">Install the app</h2>', `
// 		<p>[embed label="for-administrators"]</p>
// 		<h2 id="install-the-app">Install the app</h2>`)
// 	sourceHtml = sourceHtml.replace('<h2 id="set-up-the-app">Set up the app</h2>', `
// 		<p>[/embed]</p>
// 		<h2 id="set-up-the-app">Set up the app</h2>`)
// 	writeFileSync(filePath, sourceHtml)
// }
// generateTestData()
const filesAndFoldersToCrawl = getFilesAndDirectories(basePath)
// console.log('filesAndFoldersToCrawl', filesAndFoldersToCrawl)
generateSnippets(filesAndFoldersToCrawl, '')
