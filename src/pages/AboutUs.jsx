import React from "react"
import { Container,Typography,Box,Card,CardContent } from "@mui/material";
function AboutUs(){
    return(
        <Container maxWidth="md">
            <Box sx={{mt: 5}}>
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    About Our Portal
                </Typography>
                <Typography variant="h5">
                    Welcome to the Chess Portal
                </Typography>
                <Typography variant="body1" paragraph>
                    Chess Portal is online platform designed to help chess players to connect,compete and also improve there chess knowledge and skills.you can get motivate and inspired by playing against other players.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Players can register,login and access personalized dashbord where they can track there progress and participate in chess-related activities
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Our Goal is to build a security,flexible and simple chess comunity platform.
                    </Typography>              
                    <Typography variant="body2" color="text.secondary" paragraph>
                    Version 1.0.0
                    </Typography>


            </CardContent>
        </Card>
        </Box>
        </Container>
    );  
}
export default AboutUs;