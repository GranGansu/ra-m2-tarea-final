import PropTypes from 'prop-types'
import { Card } from '../../styles'
import { Title, Image } from '../atoms'

export default function HouseCardFull({ title }) {
  return (
    <Card>
      <div style={{ padding: '10px', position: 'absolute' }}>
        <Title as="h1" size="large" color="white">
          {title}
        </Title>
      </div>
      <Image radius="5px" height="100%" src="./home.jfif" />
    </Card>
  )
}

HouseCardFull.propTypes = {
  title: PropTypes.string,
}
