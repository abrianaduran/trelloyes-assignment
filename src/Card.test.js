describe('Card Component'), () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Card title='First Card' content='lorem ipsum' />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
}