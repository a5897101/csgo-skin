import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdditionalContentExample() {
  return (
    <Alert variant="dark">
      <Alert.Heading>這裡有許多比官方便宜的CSGO SKIN可以挑選!!</Alert.Heading>
      <p>
        杜絕官方暴力手續費，這網站將是您最好的選擇
      </p>
      <hr />
      <p className="mb-0">
        若有此網站沒有的SKIN，可以聯繫我們，我們將會努力進貨!!
      </p> 
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">購買</Button>
      </Card.Body>
    </Card>
    </div>
    </Alert>
    
   
  );
}

export default AdditionalContentExample;
