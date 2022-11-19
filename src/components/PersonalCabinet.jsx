
import Layout from './Layout';
import UserData from './UserData';
import Button from './Button';

const PersonalCabinet = () => {
    return(<div className="cabinet">
        <Layout />
        <div className="cabinet__inner center">
            <UserData />
            <Button 
                text="Изменить данные"
            />
        </div>
    </div>)
}

export default PersonalCabinet