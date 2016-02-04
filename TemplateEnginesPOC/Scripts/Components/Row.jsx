module.exports.Row = React.createClass({
    render: function () {
        const data = this.props.data;
        const department = data.Department;
        const styleOfDepartment = department === "Dev" ? {color: "red"} : {};
        const GetLastName = (lastName) => lastName.toLowerCase();

        return (
            <table>
                <tbody>
                  <tr>
                      <td>
                          Name
                      </td>
                      <td>
                          {data.FirstName}
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Last Name
                      </td>
                      <td>
                          {GetLastName(data.LastName)}
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Birth Date
                      </td>
                      <td>
                           {data.BirthDate}
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Address
                      </td>
                      <td>
                          {data.Address}
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Authorization Code
                      </td>
                      <td>
                          {data.AuthorizationCode}
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Department
                      </td>
                      <td style={styleOfDepartment}>
                           {department}
                      </td>
                  </tr>
                </tbody>
            </table>
        );
    }
});
