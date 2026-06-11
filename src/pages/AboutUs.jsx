import React from "react"
import { Container,Typography,Box,Card,CardContent,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from "@mui/material";
function AboutUs(){
    const ChessStats=[
        { label: "People who know/play chess", value: "600M – 700M" },
        { label: "Regular players", value: "70M - 120M" },
        { label: "Online registered players", value: "100M+ (platform-based)" },
        { label: "Grandmasters (total ever)", value: " 2,000+" },
        { label: "Active Super GMs (2700+)", value: "Nearly 40 - 60 Players" },
        { label: "New GMs per year", value: "20 - 40" },
        { label: "New players yearly (online + offline)", value: "3.1M - 8.3M" }
    ];
    return(
        <Container maxWidth="md">
            <Box sx={{mt: 3}}>
        <Card>
            <CardContent sx={{mt: 0.5}}>
                <Typography variant="h4" gutterBottom>
                    About Our Portal
                </Typography>
                <Typography variant="h6" sx={{ mt: 0.5 }} gutterBottom>
                    Welcome to the Chess Portal
                </Typography>
                <Typography></Typography>
                <Typography variant="body1" paragraph sx={{ mt: 1 }}>
                    Chess is one of the most widely known intellectual games in the world, played across almost every country and culture.As of 2026, the world population is approximately 8.1 billion people. Among them, an estimated 7% to 9% of people (around 600–700 million individuals) know the basic rules of chess, such as how the pieces move and how the game is played.
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 1 }}>
                    Chess Portal is online platform designed to help chess players to connect,compete and also improve there chess knowledge and skills.you can get motivate and inspired by playing against other players.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Players can register,login and access personalized dashbord where they can track there progress and participate in chess-related activities
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Our Goal is to build a security,flexible and simple chess comunity platform.
                    </Typography>
                    <TableContainer>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h6">Category</Typography></TableCell>
                                <TableCell><Typography variant="h6">Statistic</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ChessStats.map((row,index)=>(
                                <TableRow key={index}>
                                    <TableCell>{row.label}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableContainer> 
                    <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                    However, only a smaller group of people actively play chess regularly. Around 0.9% to 1.5% of the global population (approximately 70–120 million people) participate in chess on a consistent basis, either online or in over-the-board (OTB) games.
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="body1" paragraph>
                    The global average chess skill level is estimated to be around 400 to 600 Elo, which represents beginner-level understanding. At this stage, players typically know the rules but may lack deeper tactical and strategic knowledge.
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