import React, { useState } from "react";

const UserProfile = ({ theme }) => {
  const [profiles, setProfiles] = useState([
    { id: 1 , name: "abc", email: "abc@gmail.com", designation: "Developer" },
    { id: 2, name: "admin", email: "admin@gmail.com", designation: "Owner" },
    { id: 3, name: "User", email: "user@gmail.com", designation: "User" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleEdit = (profile) => {
    setSelectedProfile(profile);
    setFormData({ ...profile });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isConfirmed) {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.email === selectedProfile.email ? formData : profile
        )
      );
      setIsEditing(false);
      setIsConfirmed(false);
    } else {
      alert("Please confirm the changes before saving.");
    }
  };

  const isLightTheme = theme === "light";

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "20px",
      height: "100vh",
      backgroundColor: isLightTheme ? "#f3f4f6" : "#2d2d2d",
      transition: "background 0.3s ease",
    },
    table: {
      width: "80%",
      borderCollapse: "collapse",
      backgroundColor: isLightTheme ? "#fff" : "#3a3a3a",
      color: isLightTheme ? "#000" : "#ddd",
      borderRadius: "8px",
      overflow: "hidden",
      fontSize: "22px",
    },
    th: {
      backgroundColor: isLightTheme ? "#e0e0e0" : "#444",
      padding: "18px",
      textAlign: "left",
      borderBottom: "2px solid #ddd",
      fontSize: "24px",
    },
    td: {
      padding: "16px",
      borderBottom: "1px solid #ddd",
      fontSize: "22px",
    },
    button: {
      padding: "14px 18px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      fontSize: "20px",
      marginRight: "12px",
      backgroundColor: "#6c757d",
      color: "white",
    },
    input: {
      width: "100%",
      padding: "14px",
      borderRadius: "10px",
      border: "1px solid #bbb",
      fontSize: "20px",
    },
    label: {
      fontSize: "22px",
      fontWeight: "bold",
      marginRight: "15px",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginTop: "14px",
      marginBottom: "14px",
      fontSize: "20px",
    },
    formGroup: {
      display: "flex",
      alignItems: "center",
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.container}>
      {!isEditing ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Designation</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile, id) => (
              <tr key={profile.id}>{console.log(profile.id)}
                <td style={styles.td}>{profile.name}</td>
                <td style={styles.td}>{profile.email}</td>
                <td style={styles.td}>{profile.designation}</td>
                <td style={styles.td}>
                  <button style={styles.button} onClick={() => handleEdit(profile)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Designation:</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.checkbox}>
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
            />
            <label>Confirm Changes</label>
          </div>
          <button type="submit" style={styles.button}>
            Save Changes
          </button>
          <button type="button" style={styles.button} onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
