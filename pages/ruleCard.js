import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';

export default function RuleCard(props) {
    return (
        <Card sx={{ minWidth: 275 }} >
            <CardHeader
            title={props.title}
            style={{backgroundColor: "#CCC"}}
            />
            <CardContent>
            <Typography sx={{ mb: 1.5 }}>
                {props.description}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
                {props.notice}
            </Typography>
            </CardContent>
        </Card>
    )
}