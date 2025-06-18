import React, { useState } from 'react';

const SubtleArtVisualizationChinese = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  
  const chapters = [
    {
      id: 1,
      title: "反向法则",
      color: "#e63946",
      description: "追求积极体验本身就是一种消极体验，而接受消极体验本身就是一种积极体验。",
      key_points: [
        "追求积极=消极",
        "接受消极=积极",
        "消极是通往积极的道路"
      ]
    },
    {
      id: 2,
      title: "幸福是个问题",
      color: "#457b9d",
      description: "幸福来自于解决问题，而不是避免问题。负面情绪作为信号有其用处。",
      key_points: [
        "幸福来自解决问题",
        "负面情绪有其用处",
        "明智选择你的奋斗"
      ]
    },
    {
      id: 3,
      title: "你并不特别",
      color: "#1d3557",
      description: "特权心理会创造出妄想，让你认为自己应该得到特殊待遇而不需要付出努力。",
      key_points: [
        "特权心理是有毒的",
        "接受平凡真相",
        "非凡不是常态"
      ]
    },
    {
      id: 4,
      title: "苦难的价值",
      color: "#f4a261",
      description: "痛苦和苦难是不可避免的，但有意义的苦难会带来成长。",
      key_points: [
        "痛苦是不可避免的",
        "有意义的苦难带来成长",
        "选择为何而苦"
      ]
    },
    {
      id: 5,
      title: "你总是在选择",
      color: "#2a9d8f",
      description: "对生活中的一切负责会让人感到解脱。当我们感觉是我们选择了自己的问题时，这些问题就变得更容易管理。",
      key_points: [
        "对一切负责",
        "责任带来自由",
        "选择改变背景"
      ]
    },
    {
      id: 6,
      title: "你对一切都是错的",
      color: "#e9c46a",
      description: "我们的信念和"确定性"在未来可能看起来很荒谬。不确定性对成长是必要的。",
      key_points: [
        "拥抱不确定性",
        "犯错导致成长",
        "质疑你的确定性"
      ]
    },
    {
      id: 7,
      title: "失败是前进的道路",
      color: "#264653",
      description: ""做点什么原则"教导我们，行动先于动机，而不是相反。",
      key_points: [
        "做点什么原则",
        "行动先于动机",
        "失败对成功至关重要"
      ]
    },
    {
      id: 8,
      title: "说不的重要性",
      color: "#e76f51",
      description: "拒绝其他选择是优先考虑重要事项的必要条件。说"不"建立了关系中的健康界限。",
      key_points: [
        "拒绝使优先成为可能",
        "界限创造自由",
        "承诺缩小焦点"
      ]
    },
    {
      id: 9,
      title: "然后你死了",
      color: "#6d597a",
      description: "面对死亡能澄清什么才是真正重要的。死亡是赋予我们选择意义的终极背景。",
      key_points: [
        "死亡赋予生命意义",
        "面对死亡澄清价值观",
        "意识到有限性而活"
      ]
    }
  ];

  const styles = {
    container: {
      fontFamily: '"Noto Sans SC", "Microsoft YaHei", "微软雅黑", "PingFang SC", "Hiragino Sans GB", sans-serif',
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
      <h1 style={styles.title}>《不给一个F*ck的微妙艺术》</h1>
      
      <div style={styles.circleContainer}>
        <div style={styles.centerCircle}>
          值得在乎什么？
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
            <h3>要点：</h3>
            <ul style={styles.keyPointsList}>
              {chapters.find(c => c.id === activeChapter)?.key_points.map((point, i) => (
                <li key={i} style={styles.keyPoint}>• {point}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2 style={styles.detailsTitle}>《不给一个F*ck的微妙艺术》</h2>
            <p style={styles.detailsDescription}>
              马克·曼森的书是一种与传统自助书籍相反的方法，它关注价值观而非传统的成功指标。
              这本书认为，关键问题不是如何实现每一个目标，而是首先要确定哪些目标值得追求——
              我们应该真正"在乎"什么？
            </p>
            <p>点击任何章节圆圈来探索其关键概念。</p>
          </>
        )}
      </div>
      
      <div style={styles.footer}>
        基于马克·曼森的《不给一个F*ck的微妙艺术》
      </div>
    </div>
  );
};

export default SubtleArtVisualizationChinese;
