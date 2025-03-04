const ChessGrid = () => {
               const gridSize = 14; // 14x10 grid
             
               // Create a CSS Grid container with 14 columns and 10 rows
               return (
                 <div style={styles.gridContainer}>
                   {[...Array(gridSize * 10)].map((_, index) => {  // Update grid size calculation for 14x10
                     const isFirstRow = index < gridSize; // Check if it's the first row
                     const isLastRow = index >= gridSize * (10 - 1); // Check if it's the last row (10th row)
                     const isFirstColumn = index % gridSize === 0; // Check if it's the first column
                     const isLastColumn = (index + 1) % gridSize === 0; // Check if it's the last column
             
                     return (
                       <div
                         key={index}
                         style={{
                           ...styles.cell,
                           borderTop: isFirstRow ? 'none' : '1px solid #B3A497', // No border on top for the first row
                           borderBottom: isLastRow ? 'none' : '1px solid #B3A497', // No border on bottom for the last row
                           borderLeft: isFirstColumn ? 'none' : '1px solid #B3A497', // No border on left for the first column
                           borderRight: isLastColumn ? 'none' : '1px solid #B3A497', // No border on right for the last column
                         }}
                       ></div>
                     );
                   })}
                 </div>
               );
             };
             
             const styles = {
               gridContainer: {
                 display: 'grid',
                 gridTemplateColumns: 'repeat(14, 1fr)', // 14 columns of equal width
                 gridTemplateRows: 'repeat(10, 1fr)',    // 10 rows of equal height
                 width: '100vw', // Full screen width
                 height: '100vh', // Full screen height
               },
               cell: {
                 width: '100%',
                 height: '100%',
               },
             };
             
             export default ChessGrid;
             