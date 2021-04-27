describe('List Component'), () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<List header='First List' title='First card' id='a' content='lorem ipsum' />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
}