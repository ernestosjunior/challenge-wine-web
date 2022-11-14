import { BaseLayout } from '../templates'
import { RenderCreateMessage } from '../utils/RenderCreateMessage'

export default function Producers() {
  return <BaseLayout>{RenderCreateMessage()}</BaseLayout>
}
