const Contacts = () => {
    const managerContact = "+91-XXXXXXXXXX";
    const wardenContact = "+91-XXXXXXXXXX";
    const managerEmail = "manager@example.com";
    const wardenEmail = "warden@example.com";
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-[#172554] text-center mb-6">Contacts</h1>
  
        <div className="space-y-4">
          {/* Manager's Contact */}
          <div>
            <h2 className="text-xl font-semibold text-[#172554]">Manager's Contact</h2>
            <p className="text-lg">Phone: {managerContact}</p>
            <p className="text-lg">Email: <a href={`mailto:${managerEmail}`} className="text-blue-500">{managerEmail}</a></p>
          </div>
  
          {/* Warden's Contact */}
          <div>
            <h2 className="text-xl font-semibold text-[#172554]">Warden's Contact</h2>
            <p className="text-lg">Phone: {wardenContact}</p>
            <p className="text-lg">Email: <a href={`mailto:${wardenEmail}`} className="text-blue-500">{wardenEmail}</a></p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contacts;
s  