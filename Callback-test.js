it('should call onClick callback if provided',() => {
	const onClickMock = jest.fn();
	const testInstance = ReactTestUtiles.renderIntoDocument(<button onclick={onClickMock}>hello</button>);
	const buttonDom = ReactTestUtiles.findRenderedDOMComponentWithClass(testInstance,'my-button');
	ReactTestUtiles.Simulate.click(buttonDom);
	expect(onClickMock).toHaveBeenCalled();
});