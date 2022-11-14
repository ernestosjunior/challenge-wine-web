import { BaseLayout } from '../templates'
import { RenderCreateMessage } from '../utils/RenderCreateMessage'

export default function Club() {
  return <BaseLayout>{RenderCreateMessage()}</BaseLayout>
}
