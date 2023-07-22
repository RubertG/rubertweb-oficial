import localFont from 'next/font/local'

export const prompt = localFont({
  src: [{
    path: './Prompt-light.ttf',
    style: 'normal',
    weight: '300'
  }, {
    path: './Prompt-Regular.ttf',
    style: 'normal',
    weight: '400'
  }, {
    path: './Prompt-Medium.ttf',
    style: 'normal',
    weight: '500'
  }, {
    path: './Prompt-Bold.ttf',
    style: 'normal',
    weight: '700'
  }, {
    path: './Prompt-ExtraBold.ttf',
    style: 'normal',
    weight: '800'
  }],
  variable: '--font-prompt',
  display: 'optional',
  adjustFontFallback: 'Arial'
})
