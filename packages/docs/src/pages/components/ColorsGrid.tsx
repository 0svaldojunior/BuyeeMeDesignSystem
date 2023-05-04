import { colors } from '@buyee.me-ui/tokens'
import '../styles/colors-grid.css'
import { Box } from '@buyee.me-ui/react'

export function ColorsGrid() {
  return (
    <Box>
      <div
        className="ColorsGridContainer"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {Object.entries(colors).map(([key, color]) => {
          const isGray800 = colors.gray800 === color
          const borderStyle = !isGray800
            ? '2px solid transparent'
            : `2px solid ${colors.gray700}`
          return (
            <div
              key={key}
              className="BaseContainer"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                maxWidth: 582,
                marginTop: '1rem',
                padding: '0.25rem',
              }}
            >
              <div
                className="ColorContainer"
                style={{
                  height: '5rem',
                  width: '80%',
                  border: `${borderStyle}`,
                  backgroundColor: `${color}`,
                  borderTopRightRadius: '8px',
                  borderTopLeftRadius: '8px',
                  marginBottom: '-0.25rem',
                }}
              />

              <div
                className="DescriptionContainer"
                style={{
                  height: '4rem',
                  width: '100%',
                  borderRadius: '8px',

                  backgroundColor: `${colors.gray600}`,
                  color: `${colors.gray50}`,
                  fontSize: '1.25rem',

                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <strong>${key}</strong>
                <span>{color}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Box>
  )

  // return Object.entries(colors).map(([key, color]) => {
  //   return (
  //     <div
  //       key={key}
  //       style={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         flexDirection: 'column',
  //         width: '100%',
  //         maxWidth: 582,
  //         height: '8rem',
  //         marginTop: '1rem',
  //         padding: '0.25rem',
  //       }}
  //     >
  //       <div
  //         style={{
  //           height: '2rem',
  //           width: '80%',
  //           backgroundColor: `${color}`,
  //           borderTopRightRadius: '8px',
  //           borderTopLeftRadius: '8px',
  //         }}
  //       />

  //       <div
  //         style={{
  //           height: '4rem',
  //           width: '100%',
  //           borderRadius: '8px',

  //           backgroundColor: `${colors.gray600}`,
  //           color: `${colors.gray50}`,
  //           fontSize: '1.25rem',

  //           display: 'flex',
  //           justifyContent: 'space-around',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <strong>${key}</strong>
  //         <span>{color}</span>
  //       </div>
  //     </div>
  //   )
  // })
}
