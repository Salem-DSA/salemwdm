function FreeBuses({ref}) {
  return (
    <>
      <div id="free_buses" className="container vh-50" ref={ref}>
          <h2 className="pt-4 text-center">Fast, Fare Free Buses</h2>
          <div className="pt-4">
            <p>
              For many working-class Salemites, the cost of a used car or a tank of gas makes traveling our maze of 
              roads impossible. We are at the mercy of Uber, Lyft, and a 
              privately-owned bus company that will not run more than once an 
              hour. Those of us that walk or bike risk a life-threatening 
              collision with a vehicle on the side of the road. Salem Workers 
              Deserve a fast and safe trip to the store, to work, and home, 
              whether they own a car or not.
            </p>
            <ul>
              <li>
                Salem Workers Demand that the City Council end its contract with 
                Cherriots and Tax the Rich to create a publicly-owned and operated 
                Salem-Keizer Metropolitan Transit Authority (MTA). The Salem-Keizer 
                MTA must have sufficient funding so that buses run every fifteen 
                minutes at every stop. The Salem Keizer MTA must have no fares; 
                buses must be free at the point of service.
              </li>
            </ul>
          </div>
      </div>
    </>
  );
}

export default FreeBuses;