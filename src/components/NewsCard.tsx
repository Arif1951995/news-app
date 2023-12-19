import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import {useNavigate} from "react-router-dom"
 
type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  publishedAt: string;
};

const NewsCard: React.FC<CardProps> = (props) => {
  const navigate = useNavigate();  
  console.log({ props });


  const handleNavigate = (obj: CardProps) => {
    const str = JSON.stringify(obj)
    localStorage.setItem("article", str);
    navigate(`/articles/${props.title}`)
    

    

  }

  return (
    <Card
    onClick={() => handleNavigate(props)}
    sx={{ maxWidth: 345 }} className="mx-8 mb-5 cursor-pointer">
      <CardMedia
        sx={{ height: 140 }}
        image={props.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        {/* <div className="flex justify-end text-sm mt-5">
          <div className="mr-2">Published at:</div>
          <div>{moment(props.publishedAt).format("DD-MM-YYYY")}</div>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default NewsCard;
