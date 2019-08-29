class Hello{
	public static void main(String args[]){
		String empName=args[0];
		String empId=args[1];
		String empSalary=args[2];
		System.out.println(empName);
		System.out.println(empId);
		System.out.println(empSalary);
		if(Integer.parseInt(empSalary) > 5000){
			System.out.println("You don't have to increase the salary");
		}
		else{
			System.out.println("You have to increase your salary");
		}	
	}
}