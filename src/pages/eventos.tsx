import { BaseLayout } from '../templates'
import { RenderCreateMessage } from '../utils/RenderCreateMessage'

export default function Events() {
  return <BaseLayout>{RenderCreateMessage()}</BaseLayout>
}
