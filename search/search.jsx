
class SearchTable extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
    console.log("search", this.state.search);
  }
  render() {
    let filteredPages = this.props.pages.filter(
      (page) => {
        return page.title.toLowerCase().indexOf(
          this.state.search.toLowerCase()
        ) !== -1;
      }
    );
    return (
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Page Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredPages.map(
              (page) => {
                return (
                  <SearchTableItem page={page} key={page.id} />
                );
              }
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

class SearchTableItem extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <a href={this.props.page.url}>
            {this.props.page.title}
          </a>
        </td>
      </tr>
    )
  }
}

ReactDOM.render(
    <SearchTable pages={pages} />,
    document.getElementById('app')
);
