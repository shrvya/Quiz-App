const ErrorMessage = ({props}) => {
    console.log(props) 
    return (
      <div
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "orangered",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {props}
      </div>
    );
  };
  
  export default ErrorMessage;
  