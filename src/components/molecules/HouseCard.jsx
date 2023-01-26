import PropTypes from 'prop-types'
import { Card, Grid } from '../../styles'
import { Title, Text, Button, Image } from '../atoms'

export default function HouseCard({ title, price, type }) {
  return (
    <Card>
      {type === 0 ? (
        <Image radius="5px" height="100%" src="./home.jfif" />
      ) : (
        <Image src="./home.jfif" />
      )}
      <div style={{ padding: '10px' }}>
        <Title as="h1" size="large" color="gray">
          {title}
        </Title>
        <Grid align="center" padding="10px 0px" justify="baseline" gap="0px">
          <Text weight="bold" size="x-large">
            {price}€
          </Text>
          <Button color="hsl(252deg 19% 55%)">Localizar</Button>
        </Grid>
      </div>
    </Card>
  )
}

HouseCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.number,
}
