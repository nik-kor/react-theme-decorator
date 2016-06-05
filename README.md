# Theme decorator

E.g. we have the component:

```jsx
import { theme } from 'react-theme-decorator';

@theme
export class Button extends React.Component {
    render() {
        return <button className={`${this.getTheme()}-theme`}>{ this.props.children }</button>;
    }
}
```

You can just pass theme as a property

```jsx
<Button theme="red-on-black">Do it</Button>
```

Or you can pass the theme through the context:

```jsx
<ThemeProvider theme='red-on-black'>
    <div>
        <Button>Do it</Button>
        <SomeOtherComponentUsingTheme/>
    </div>
</ThemeProvider>

// auxiliary component
class ThemeProvider extends React.Component {
    static contextTypes = {
        theme: React.PropTypes.string
    };

    static childContextTypes = {
        theme: React.PropTypes.string
    };

    getChildContext() {
        return {
            theme: this.props.theme
        };
    }

    render() {
        if (this.props.children && this.props.children.length > 1) {
            throw new Error('You can provide only one child element to <ThemeProvider />');
        }

        return this.props.children && React.cloneElement(this.props.children);
    }
}
```
