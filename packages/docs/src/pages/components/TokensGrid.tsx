import { Box, Text } from '@buyee.me-ui/react'
import { colors } from '@buyee.me-ui/tokens'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <Box
      css={{
        width: 'auto',
        maxWidth: 1180,

        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {Object.entries(tokens).map(([key, value]) => {
        return (
          <Box
            key={key}
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              maxWidth: 580,

              '&:hover': {
                background: colors.gray500,
              },
            }}
          >
            <Box
              css={{
                display: 'flex',
                height: '3rem',
                width: '65%',

                alignItems: 'center',
                justifyContent: 'center',

                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,

                background: '$gray700',
                border: `2px solid ${colors.gray700}`,
              }}
            >
              <Text size={'4xl'}>{key}</Text>
            </Box>

            <Box
              css={{
                height: '6rem',
                width: '40%',

                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                justifyContent: 'center',

                background: '$gray700',
                border: `2px solid ${colors.gray700}`,
              }}
            >
              <Text as="h3">{value}</Text>
              {hasRemValue && (
                <Text as="h3">{Number(value.replace('rem', '')) * 16}px</Text>
              )}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
