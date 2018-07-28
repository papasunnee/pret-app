import { IndexPageContext } from '../contexts/pages/indexPage'

export default props => (
    <IndexPageContext>{
        ({viewerPretCandidate: { candidate }}) => (
            <div>
              {candidate.name}
            </div>
        )
    }</IndexPageContext>
)
