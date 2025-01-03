Overview: 
    This is a Communication Tracking Calendar Application designed for seamless communication management. It features Admin, User, and Reporting & Analytics modules, providing tools for managing communication, tracking activities, generating reports, and analyzing engagement effectiveness.

Features:

Admin Module: 
    Company Management: Add, edit, delete companies with details such as: Name, Location, LinkedIn Profile, Emails, Phone Numbers, Comments, and Communication Periodicity. 
    Communication Method Management: Define communication methods with attributes: Name, Description, Sequence, and Mandatory Flag.

User Module Dashboard: 
    Displays company communication data with color-coded highlights for overdue and due communications. Interactive Calendar View:View past and upcoming communications.Hover tooltips for recorded communication notes.Log new communications with action modals.
    
Reporting & Analytics 
    Communication Frequency Report: Visualize communication method usage over time. 
    Engagement Effectiveness Dashboard: Analyze the success rate of communication methods. 
    Overdue Communication Trends: Trendline or heatmap for overdue communications. 
    Downloadable Reports: Export reports in PDF/CSV format. 
    Real-Time Activity Log: Live feed of communication activities sortable by date, user, or company.

Setup and Deployment 
Prerequisites: 
    NPM or Yarn 
    React environment setup

Notes on Application Functionality:

Admin Module:
  Functionality: Fully operational company and communication method management.
  Limitations: Data is not persisted between sessions (requires backend integration).

User Module: 
  Functionality: Dynamic calendar view with hover effects and interactive communication logging.
  Limitations: Highlight reset logic may require optimization for larger datasets.

Reporting & Analytics:
 Functionality: Interactive and downloadable analytics. 
 Limitations: Graphs and charts rely on mock data; real-time data integration is needed.
