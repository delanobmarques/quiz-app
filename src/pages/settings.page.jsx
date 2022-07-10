import { Typography, Button , CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAxios from "../api/useAxios";
import SelectField from "../components/select-field.component";
import TextFieldComp from "../components/text-field.component";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    const navigate = useNavigate();

    if(loading){
        return (
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    if(error) {
        return (
            <Typography variant="h5" mt={20} color="red">
                Sorry! Something went wrong.
            </Typography>
        )
    }

    const difficultyOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard ", name: "Hard"},
    ]

    const typeOptions = [
        {id: "multiple", name: "Multiple Choice"},
        {id: "boolean", name: "True or False"},
    ]

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/questions');
    };
  
    return (
        <div>
            <Typography variant="h2" fontWeight="bold">
                Quiz App
            </Typography>    
            <form onSubmit={handleSubmit}>
                <SelectField options={response.trivia_categories} label="Category"/>
                <SelectField options={difficultyOptions} label="Difficulty"/>
                <SelectField options={typeOptions} label="Type"/>
                <TextFieldComp/>
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        Get Started
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Settings;
