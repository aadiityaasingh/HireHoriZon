const { useEffect } = require("react");
const { useSelector } = require("react-redux");
const { useNavigate } = require("react-router-dom");

const ProtectedRoute =({children}) => {
    const {user} = useSelector(store => store.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(user == null || user.role !=='recruiter'){
            navigate("/login");
        }
    },[]);

    return (
        <>
        {children}</>
    )
};
export default ProtectedRoute;