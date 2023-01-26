import { HouseCard, HouseCardFull } from '../molecules'
import { pisos } from '../../hooks'
import { Grid } from '../../styles'

export default function Houses() {
  return (
    <Grid columns="33% 33% 33%" padding="0">
      {pisos.map((piso, key) =>
        key === 0 ? (
          <HouseCardFull key={piso.id} title={piso.title} />
        ) : (
          <HouseCard
            type={key}
            key={piso.id}
            title={piso.title}
            price={piso.price}
          />
        ),
      )}
    </Grid>
  )
}
