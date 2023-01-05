import { Text, TextProps } from '@juniortrojilio/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: `Mussum Ipsum, cacilds vidis litro abertis.Admodum accumsan disputationi eu sit.
      Vide electram sadipscing et per.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.
      Sed non consequat odio.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
      Manduma pindureta quium dia nois paga.`,
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
