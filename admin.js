document.addEventListener('DOMContentLoaded', function() {
    const approveRejectButton = document.querySelector('.card:nth-child(1) button');
    const verifyClaimsButton = document.querySelector('.card:nth-child(2) button');
    const sendAlertsButton = document.querySelector('.card:nth-child(3) button');
    const manageUsersButton = document.querySelector('.card:nth-child(4) button');
    const manageConfigButton = document.querySelector('.card:nth-child(5) button');
    const updateItemButton = document.querySelector('.card:nth-child(6) button');
    const monitorLogButton = document.querySelector('.card:nth-child(7) button');
    const realTimeDashboardButton = document.querySelector('.card:nth-child(8) button');
    const adminNotificationButton = document.querySelector('.card:nth-child(9) button');

    approveRejectButton.addEventListener('click', function() {
        alert('Approve/Reject button clicked');
        // Add your approve/reject logic here
    });

    verifyClaimsButton.addEventListener('click', function() {
        alert('Verify Claims button clicked');
        // Add your verify claims logic here
    });

    sendAlertsButton.addEventListener('click', function() {
        alert('Send Alerts button clicked');
        // Add your send alerts logic here
    });

    manageUsersButton.addEventListener('click', function() {
        alert('Manage Users button clicked');
        // Add your manage users logic here
    });

    manageConfigButton.addEventListener('click', function() {
        alert('Manage Configuration button clicked');
        // Add your manage configuration logic here
    });

    updateItemButton.addEventListener('click', function() {
        alert('Update Item button clicked');
        // Add your update item logic here
    });

    monitorLogButton.addEventListener('click', function() {
        alert('Monitor Log System Activity button clicked');
        // Add your monitor log logic here
    });

    realTimeDashboardButton.addEventListener('click', function() {
        alert('Receive Real-Time Dashboard button clicked');
        // Add your real-time dashboard logic here
    });

    adminNotificationButton.addEventListener('click', function() {
        alert('Receive Notification for Admin Action button clicked');
        // Add your admin notification logic here
    });
});
