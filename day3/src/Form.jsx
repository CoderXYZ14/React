function handleFormSubmit(event){
    console.log("Form submitted");
    event.preventDefault();
}
export default function Form(){
    return(<form>
        <input placeholder="Write something"/>
        <button onClick={handleFormSubmit}>Submit</button>
    </form>);

}