import { useSelector } from "react-redux"

const UserData = () => {
    const user = useSelector(state => state.user)
    console.log(user);
    return(
    <div className="user-data">
        <table className="user-data__table">
            <tbody>
                <tr className="user-data__table-head">
                    <th>First name</th>
                    <th>Last name</th>
                </tr>
                <tr className="user-data__row">
                    <td>Имя</td>
                    <td>{user.name}</td>
                </tr>
                <tr className="user-data__row">
                    <td>Телефон</td>
                    <td>{user.phone}</td>
                </tr>
                <tr className="user-data__row">
                    <td>Email</td>
                    <td>{user.email || 'email не указан'} 
                        {/* <button>указать</button> доделать кнопку добавления почты */}
                    </td>
                </tr>
                <tr className="user-data__row">
                    <td>Адрес</td>
                    <td>{user.address || 'адрес не указан'} 
                        {/* <button>указать</button> */}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default UserData