import { student } from '../data/labs.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 className="hero__title">JAVA PROGRAMMING LABORATORY RECORD</h1>
          <p className="hero__name">{student.nameUpper}</p>
          <p className="hero__roll">Roll Number: {student.rollNo}</p>
          <p className="hero__meta">{student.branchShort} • SECTION {student.section}</p>
          <p className="hero__meta">{student.subject}</p>
          <p className="hero__intro">
            This website contains my Java laboratory exercises and weekly practical records.
            Open any week below to read the submitted record.
          </p>
          <a href="#labs" className="btn btn--primary">Explore Weekly Labs</a>
        </div>

        <div className="hero__code" aria-hidden="true">
          <div className="code-card">
            <div className="code-card__bar"><i /><i /><i /><span>Main.java</span></div>
<pre>{`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`}</pre>
          </div>
          <div className="code-card code-card--small">
<pre>{`class Student {
  String name;
  void learn() { }
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
