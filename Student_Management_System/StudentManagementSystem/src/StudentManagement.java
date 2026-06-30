
import java.sql.*;
import java.util.*;

public class StudentManagement {
	static final String driver = "oracle.jdbc.driver.OracleDriver"; 
    static final String JDBC_URL = "jdbc:mysql://localhost:3306/studentdb";
    static final String USER = "root";
    static final String PASS = "biswajit@5002"; 
 
    public static void main(String[] args)  {
        Scanner sc = new Scanner(System.in);
        while (true) {
//        	Class.forName(driver);
            System.out.println("\n=== :Student Management System: ===");
            System.out.println("1. Add Student");
            System.out.println("2. View All Students");
            System.out.println("3. Update Student");
            System.out.println("4. Delete Student");
            System.out.println("5. Search Student by ID");
            System.out.println("6. Search Student by Name");
            System.out.println("7. Total Number of Students");
            System.out.println("8. Show Topper Student");
            System.out.println("9. Show Students Sorted by Marks");
            System.out.println("10. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            switch (choice) {
                case 1: addStudent(sc); break;
                case 2: viewStudents(); break;
                case 3: updateStudent(sc); break;
                case 4: deleteStudent(sc); break;
                case 5: searchStudentById(sc); break;
                case 6: searchStudentByName(sc); break;
                case 7: countStudents(); break;
                case 8: showTopper(); break;
                case 9: sortStudentsByMarks(); break;
                case 10: System.out.println("Exiting..."); System.exit(0);
                default: System.out.println("Invalid choice!");
            }
        }
    }

    static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, USER, PASS);
    }
//It is the key JDBC call returns a Connection we used in each CRUD method.
//convenient for the multiple time calling in each block , we don not have to establish connection multiple time
    static void addStudent(Scanner sc) {
        try (Connection conn = getConnection()) {
            System.out.print("Enter Name: ");
            sc.nextLine();
            String name = sc.nextLine();
            System.out.print("Enter Age: ");
            int age = sc.nextInt();
            System.out.print("Enter Course: ");
            sc.nextLine();
            String course = sc.nextLine();
            System.out.print("Enter Marks: ");
            double marks = sc.nextDouble();

            String sql = "INSERT INTO students (name, age, course, marks) VALUES (?, ?, ?, ?)";
            PreparedStatement pst = conn.prepareStatement(sql);
            pst.setString(1, name);
            pst.setInt(2, age);
            pst.setString(3, course);
            pst.setDouble(4, marks);

            int rows = pst.executeUpdate();
            if (rows > 0) {
                System.out.println("Student added successfully!");
            } else {
                System.out.println("Failed to add student.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void viewStudents() {
        try (Connection conn = getConnection()) {
            String sql = "select * from students";
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(sql);

            System.out.println("\nID\tName\tAge\tCourse\tMarks");
            while (rs.next()) {
                System.out.printf("%d\t%s\t%d\t%s\t%.2f\n",
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getInt("age"),
                        rs.getString("course"),
                        rs.getDouble("marks")); 
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    static void updateStudent(Scanner sc) {
        try (Connection conn = getConnection()) {
            System.out.print("Enter Student ID to Update: ");
            int id = sc.nextInt();

            System.out.print("Enter New Name: ");
            sc.nextLine();
            String name = sc.nextLine();
            System.out.print("Enter New Age: ");
            int age = sc.nextInt();
            System.out.print("Enter New Course: ");
            sc.nextLine();
            String course = sc.nextLine();
            System.out.print("Enter New Marks: ");
            double marks = sc.nextDouble();

            String sql = "UPDATE students SET name=?, age=?, course=?, marks=? WHERE id=?";
            PreparedStatement pst = conn.prepareStatement(sql);
            pst.setString(1, name);
            pst.setInt(2, age);
            pst.setString(3, course);
            pst.setDouble(4, marks);
            pst.setInt(5, id);
           
            int rows = pst.executeUpdate();
            if (rows > 0) {
                System.out.println("Student updated successfully!");
            } else {
                System.out.println("Student ID not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void deleteStudent(Scanner sc) {
        try (Connection conn = getConnection()) {
            System.out.print("Enter Student ID to Delete: ");
            int id = sc.nextInt();

            String sql = "DELETE FROM students WHERE id=?";
            PreparedStatement pst = conn.prepareStatement(sql);
            pst.setInt(1, id);

            int rows = pst.executeUpdate();
            if (rows > 0) {
                System.out.println("Student deleted successfully!");
            } else {
                System.out.println("Student ID not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void searchStudentById(Scanner sc) {
        try(Connection conn = getConnection()) {
        	
            System.out.print("Enter Student ID to Search: ");
            int id = sc.nextInt();
            
            String sql = "SELECT * FROM students WHERE id=?";
            PreparedStatement pst = conn.prepareStatement(sql);
            pst.setInt(1, id);
            ResultSet rs = pst.executeQuery();

            if (rs.next()) {
                System.out.println("\nStudent Found:");
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Age: " + rs.getInt("age"));
                System.out.println("Course: " + rs.getString("course"));
                System.out.println("Marks: " + rs.getDouble("marks"));
            } else {
                System.out.println("Student not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void searchStudentByName(Scanner sc) {
        try (Connection conn = getConnection()) {
            System.out.print("Enter Student Name to Search: ");
            sc.nextLine();
            String name = sc.nextLine();

            String sql = "SELECT * FROM students WHERE name LIKE ?";
            PreparedStatement pst = conn.prepareStatement(sql);
            pst.setString(1, "%" + name + "%");
            ResultSet rs = pst.executeQuery();

            boolean found = false;
            while (rs.next()) {
                if (!found){
                    System.out.println("\nID\tName\tAge\tCourse\tMarks");
                    found = true;
                }
                System.out.printf("%d\t%s\t%d\t%s\t%.2f\n",
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getInt("age"),
                        rs.getString("course"),
                        rs.getDouble("marks"));
            }
            if (!found){
                System.out.println("No student found with given name.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void countStudents() {
        try (Connection conn = getConnection()) {
            String sql = "SELECT COUNT(*) FROM students";
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(sql);

            if (rs.next()){
                System.out.println("Total Students: " + rs.getInt(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void showTopper() {
        try (Connection conn = getConnection()) {
            String sql = "SELECT * FROM students ORDER BY marks DESC LIMIT 1";
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(sql);

            if (rs.next()) {
                System.out.println("\nTopper Student:");
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Name: " + rs.getString("name"));
                System.out.println("Marks: " + rs.getDouble("marks"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    static void sortStudentsByMarks() {
        try (Connection conn = getConnection()) {
            String sql = "SELECT * FROM students ORDER BY marks DESC";
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery(sql);

            System.out.println("\nID\tName\tAge\tCourse\tMarks");
            while (rs.next()) {
                System.out.printf("%d\t%s\t%d\t%s\t%.2f\n",
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getInt("age"),
                        rs.getString("course"),
                        rs.getDouble("marks"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
