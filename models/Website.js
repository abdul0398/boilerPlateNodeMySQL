export default const createWebsiteTableQuery = `
CREATE TABLE IF NOT EXISTS websites (
  id INT PRIMARY KEY AUTO_INCREMENT,
  secret VARCHAR(255) NOT NULL,
  URL VARCHAR(255) NOT NULL
)`;


