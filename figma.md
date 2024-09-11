# Typography

Headline1 - Typography.Title level=1
Headline2 - Typography.Title level=2
Title1 - Typography.Title level=3
Title2 - Typography.Title level=4
Body - Typography.Text
Label - Typography.Text type="secondary"

# Use props in styled component

```javascript
const ContentWrapper = styled.div`
  background: ${(props) => props.theme.colorBgBase};
`;
```
