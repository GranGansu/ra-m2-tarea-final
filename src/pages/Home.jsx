import { Body, Houses } from '../components/layout'
import { Grid, dimensions } from '../styles'

export default function Home() {
  return (
    <Body>
      <Grid padding={dimensions.spacing}>
        <Houses />
        <div>mapa</div>
      </Grid>
    </Body>
  )
}
