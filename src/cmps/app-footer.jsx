import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
export default function AppFooterLanding() {
  return (
    <footer className="main-container full app-footer-landing full footer-position">
      <ul className="clean-list flex social-links">
        <li className="pointer social-link">
          <GitHubIcon style={{ color: "white", fontSize: "52px" }} />
        </li>
        <li className="pointer social-link">
          <LinkedInIcon style={{ color: "white", fontSize: "52px" }} />
        </li>
      </ul>
    </footer>
  )
}
