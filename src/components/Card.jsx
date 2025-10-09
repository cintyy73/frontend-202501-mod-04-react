const Card = ({element}) => {
  return (
    <div style={{
      backgroundColor: '#f8fafc',
      padding: '1.5rem',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      margin: '1rem',
      color: '#1e293b'
    }}>
      <h3 style={{ 
        margin: '0 0 1rem 0', 
        color: '#3b82f6',
        borderBottom: '2px solid #3b82f6',
        paddingBottom: '0.5rem'
      }}>
        Name: {element.name}
      </h3>
      <p style={{ 
        margin: 0, 
        fontSize: '1.1rem',
        color: '#64748b'
      }}>
        Age: {element.age} years
      </p>
    </div>
  )
}

export default Card
