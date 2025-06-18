import React, { useState } from 'react';

const SubtleArtVisualization = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  
  const chapters = [
    {
      id: 1,
      title: "The Backwards Law",
      color: "#e63946",
      description: "The pursuit of positive experience is itself a negative experience, and the acceptance of negative experience is itself a positive experience.",
      key_points: [
        "Pursuit of positive = negative",
        "Acceptance of negative = positive",
        "Negativity is the path to positivity"
      ]
    },
    {
      id: 2,
      title: "Happiness Is a Problem",
      color: "#457b9d",
      description: "Happiness comes from solving problems, not avoiding them. Negative emotions serve a purpose as signals.",
      key_points: [
        "Happiness comes from solving problems",
        "Negative emotions have utility",
        "Choose your struggles wisely"
      ]
    },
    {
      id: 3,
      title: "You Are Not Special",
      color: "#1d3557",
      description: "Entitlement creates delusional beliefs that you deserve special treatment without effort.",
      key_points: [
        "Entitlement is toxic",
        "Accept mundane truths",
        "Extraordinary is not the norm"
      ]
    },
    {
      id: 4,
      title: "The Value of Suffering",
      color: "#f4a261",
      description: "Pain and suffering are inevitable, but meaningful suffering leads to growth.",
      key_points: [
        "Pain is inevitable",
        "Meaningful suffering leads to growth",
        "Choose what to suffer for"
      ]
    },
    {
      id: 5,
      title: "You Are Always Choosing",
      color: "#2a9d8f",
      description: "Taking responsibility for everything in your life is liberating. When we feel we choose our problems, they become more manageable.",
      key_points: [
        "Take responsibility for everything",
        "Freedom through responsibility",
        "Choice changes context"
      ]
    },
    {
      id: 6,
      title: "You're Wrong About Everything",
      color: "#e9c46a",
      description: "Our beliefs and 'certainties' will likely seem ridiculous in the future. Uncertainty is necessary for growth.",
      key_points: [
        "Embrace uncertainty",
        "Being wrong leads to growth",
        "Question your certainties"
      ]
    },
    {
      id: 7,
      title: "Failure Is the Way Forward",
      color: "#264653",
      description: "The 'Do Something Principle' teaches that action precedes motivation, not the other way around.",
      key_points: [
        "Do Something Principle",
        "Action precedes motivation",
        "Failure is essential for success"
      ]
    },
    {
      id: 8,
      title: "The Importance of Saying No",
      color: "#e76f51",
      description: "Rejecting alternatives is necessary to prioritize what matters. Saying 'no' establishes healthy boundaries.",
      key_points: [
        "Rejection enables prioritization",
        "Boundaries create freedom",
        "Commitment narrows focus"
      ]
    },
    {
      id: 9,
      title: "And Then You Die",
      color: "#6d597a",
      description: "Confronting mortality clarifies what truly matters. Death is the ultimate context that gives meaning to our choices.",
      key_points: [
        "Death gives life meaning",
        "Confronting mortality clarifies values",
        "Live with awareness of finitude"
      ]
    }
  ];

  const styles = {
    container: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    title: {
      color: '#e63946',
      textAlign: 'center',
      marginBottom: '30px',
    },
    circleContainer: {
      position: 'relative',
      width: '600px',
      height: '600px',
      margin: '0 auto',
    },
    centerCircle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      backgroundColor: '#f8f9fa',
      border: '3px solid #e63946',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#e63946',
      fontWeight: 'bold',
      fontSize: '18px',
      zIndex: 10,
    },
    chapterCircle: (chapter, index) => {
      const angle = (index * 40) * (Math.PI / 180);
      const radius = 220;
      const x = 300 + radius * Math.cos(angle);
      const y = 300 + radius * Math.sin(angle);
      
      return {
        position: 'absolute',
        top: `${y - 40}px`,
        left: `${x - 40}px`,
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: chapter.color,
        opacity: activeChapter === chapter.id ? '1' : '0.8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: activeChapter === chapter.id ? 'scale(1.1)' : 'scale(1)',
        zIndex: activeChapter === chapter.id ? 20 : 5,
      };
    },
    line: (chapter, index) => {
      const angle = (index * 40) * (Math.PI / 180);
      const innerRadius = 100;
      const outerRadius = 180;
      const x1 = 300 + innerRadius * Math.cos(angle);
      const y1 = 300 + innerRadius * Math.sin(angle);
      const x2 = 300 + outerRadius * Math.cos(angle);
      const y2 = 300 + outerRadius * Math.sin(angle);
      
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: activeChapter === chapter.id ? '1' : '0.6',
      };
    },
    detailsContainer: {
      marginTop: '40px',
      padding: '20px',
      backgroundColor: activeChapter ? chapters.find(c => c.id === activeChapter)?.color + '10' : '#f8f9fa',
      borderRadius: '8px',
      borderLeft: activeChapter ? `4px solid ${chapters.find(c => c.id === activeChapter)?.color}` : '4px solid #e63946',
      transition: 'all 0.3s ease',
    },
    detailsTitle: {
      color: activeChapter ? chapters.find(c => c.id === activeChapter)?.color : '#e63946',
      marginBottom: '15px',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    detailsDescription: {
      marginBottom: '15px',
      lineHeight: '1.5',
    },
    keyPointsList: {
      listStyleType: 'none',
      padding: 0,
    },
    keyPoint: {
      padding: '8px 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
    },
    footer: {
      marginTop: '40px',
      textAlign: 'center',
      fontSize: '0.9em',
      color: '#666',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>The Subtle Art of Not Giving a F*ck</h1>
      
      <div style={styles.circleContainer}>
        <div style={styles.centerCircle}>
          What to Give a F*ck About?
        </div>
        
        {chapters.map((chapter, index) => (
          <React.Fragment key={chapter.id}>
            <div 
              style={styles.chapterCircle(chapter, index)}
              onClick={() => setActiveChapter(activeChapter === chapter.id ? null : chapter.id)}
            >
              {chapter.title}
            </div>
            
            <svg style={styles.line(chapter, index)}>
              <line 
                x1={300} 
                y1={300} 
                x2={300 + 220 * Math.cos((index * 40) * (Math.PI / 180))}
                y2={300 + 220 * Math.sin((index * 40) * (Math.PI / 180))}
                stroke={chapter.color}
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </React.Fragment>
        ))}
      </div>
      
      <div style={styles.detailsContainer}>
        {activeChapter ? (
          <>
            <h2 style={styles.detailsTitle}>
              {chapters.find(c => c.id === activeChapter)?.title}
            </h2>
            <p style={styles.detailsDescription}>
              {chapters.find(c => c.id === activeChapter)?.description}
            </p>
            <h3>Key Points:</h3>
            <ul style={styles.keyPointsList}>
              {chapters.find(c => c.id === activeChapter)?.key_points.map((point, i) => (
                <li key={i} style={styles.keyPoint}>• {point}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2 style={styles.detailsTitle}>The Subtle Art of Not Giving a F*ck</h2>
            <p style={styles.detailsDescription}>
              Mark Manson's book is a contrarian approach to self-help that focuses on values rather than traditional success metrics. 
              The book argues that the key question isn't how to achieve every goal, but rather what goals are worth pursuing in the first place - 
              what should we truly "give a f*ck" about?
            </p>
            <p>Click on any chapter circle to explore its key concepts.</p>
          </>
        )}
      </div>
      
      <div style={styles.footer}>
        Based on Mark Manson's "The Subtle Art of Not Giving a F*ck"
      </div>
    </div>
  );
};

export default SubtleArtVisualization;
