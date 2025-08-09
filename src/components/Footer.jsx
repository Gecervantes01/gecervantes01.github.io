import '.././styles/footer-styles.css'
import {Stack, IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <footer>
            <div id='footer-links'> 
                <small>giovancervantes@yahoo.com</small>
                <Stack direction="row" justifyContent="center">
                    <IconButton 
                    href='https://www.linkedin.com/in/gecervantes/'
                    id='linkedin-btn'
                    target="_blank"
                    >
                        <LinkedInIcon fontSize='medium'/>
                    </IconButton>
                    <IconButton 
                    href='https://github.com/Gecervantes01'
                    id='github-btn'
                    target="_blank"
                    >
                        <GitHubIcon fontSize='medium'/>
                    </IconButton>
                </Stack>
                <small>Made by Giovan Cervantes</small>
            </div>
        </footer>
    )
}

export default Footer