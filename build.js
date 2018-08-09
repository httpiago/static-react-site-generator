const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const render = require('static-react/index.js')

require('babel-register')({
  presets: [
    'babel-preset-env',
    'babel-preset-stage-0',
    'babel-preset-react'
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-runtime'
  ].map(require.resolve)
})

// Pegar todos os arquivos .js dentro da pasta "pages"
glob('pages/*/*.js', (err, files)  => {
  if (err) return

  files.forEach(async (file) => {
    let CompName = path.parse(file).name
    
    // Checar se esse é o arquivo principal da pasta (que tem o mesmo nome da pasta pai)
    if (!RegExp(`${CompName}/${CompName}.js$`).test(file)) return

    let Component = require('./' + file)
    // Renderizar componente do React
    await render(Component.default || mod)
      .then((outputHtml) => {
        let CompNameLower = CompName.toLowerCase()
        let CompDistPath = (CompNameLower === 'index') ? `${CompNameLower}` : `${CompNameLower}/index`
        
        // Criar arquivo na pasta dist
        fs.outputFile('dist/' + CompDistPath + '.html', outputHtml, (err) => {
          if (err) throw err

          console.log(`Page ${CompName} rendered.`)
        });
      })
      .catch(err => {
        console.error(err)
        process.exit(1)
      })
  })
})

// Copiar a pasta "public" para dentro da pasta "dist"
require('copy-dir')('./public', './dist/public', (err) => {
  if (err) console.log('Erro ao copiar pasta "public"', err)
})