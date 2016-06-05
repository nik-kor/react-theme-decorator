var theme = require('../dist').default;
var React = require('react');
var expect = require('expect');

describe('Theme decorator', () => {
    it('should add static props to component', () => {
        let component = { prototype: {} };
        theme(component);

        expect(component.contextTypes.theme).toEqual(React.PropTypes.string);
        expect(component.childContextTypes.theme).toEqual(React.PropTypes.string);

        component.contextTypes = {
            test: 'b'
        };

        theme(component);
        expect(component.contextTypes).toEqual({
            test: 'b',
            theme: React.PropTypes.string,
        });
    });

    it('should add getTheme function', () => {
        const createComponent = (props={}, context={}) => {
            let component = function() {
                this.props = props;
                this.context = context;
            };
            component.prototype = {};

            return component;
        };

        let Component = createComponent({ theme: 'hi there' });
        theme(Component);

        expect(Component.prototype.getTheme).toExist();
        expect((new Component()).getTheme()).toEqual('hi there');

        Component = createComponent({}, { theme: 'hi there too' });
        theme(Component);

        expect((new Component()).getTheme()).toEqual('hi there too');

        Component = createComponent();
        theme(Component);
        expect((new Component()).getTheme()).toEqual('my-default-theme');
    });
});
