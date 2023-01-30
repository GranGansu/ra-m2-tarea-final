import { Body, Houses } from '../components/layout'
import { Grid, dimensions } from '../styles'

export default function Home() {
  return (
    <Body>
      {/* Utiliza un valor absoluto de styles, o utiliza backticks `` */}
      <Grid padding={'20px ' + dimensions.margin}>
        <Houses />
        <div>mapa</div>
      </Grid>
    </Body>
  )
}
