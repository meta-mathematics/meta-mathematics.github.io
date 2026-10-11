# Abel–Ruffini Theorem via an Explicit Quintic

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** MA-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

Prove $f(x)=x^5-4x+2\in\mathbb Q[x]$ has Galois group $S_5$ and is not solvable by radicals. Deduce there is no radical formula solving every quintic.

**Foundations and permitted imports:**

Use Eisenstein’s criterion: a primitive integer polynomial with all nonleading coefficients divisible by a primeℓ, leading coefficient not divisible byℓ, and constant coefficient not divisible byℓ² is irreducible overQ. Import characteristic-zero splitting-field Galois theory, transitivity for irreducible polynomials, orbit–stabilizer, Cauchy’s group theorem, Lagrange’s theorem, and the radical-solvability criterion: a polynomial overQ is solvable by radicals iff its splitting-field Galois group is solvable. The permutation generation and S₅ nonsolvability steps are established below.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Irreducibility and real-root count
N2 [v1] Two permutation types
  N1 -- E1: An irreducible quintic with three real roots and one conjugate pair. --> N2
N3 [v1] Generate the full symmetric group
  N2 -- E2: G contains a5-cycle and a transposition. --> N3
N4 [v1] Nonsolvability and radical obstruction
  N3 -- E3: The exact Galois group isS₅. --> N4
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | An irreducible quintic with three real roots and one conjugate pair. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | G contains a5-cycle and a transposition. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |
| T3-4 | N3/v1, E3 | The exact Galois group isS₅. | N4.1 | N4 inputs below; same theorem objects and assumptions | Proof §4.N3 |

## 3. Node roles and faculty activities

### N1/v1 — Irreducibility and real-root count

**Object, role, and local target:** Combine Eisenstein with exact critical-point signs. The required export is: An irreducible quintic with three real roots and one conjugate pair.

**Inputs:** f=x⁵−4x+2; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain f=x⁵−4x+2; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Combine Eisenstein with exact critical-point signs. |
| Sense | A plotted root count alone is not an exact certificate. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** An irreducible quintic with three real roots and one conjugate pair. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Two permutation types

**Object, role, and local target:** Read transitivity and complex conjugation. The required export is: G contains a5-cycle and a transposition.

**Inputs:** Irreducibility and real-root count; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Irreducibility and real-root count; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Read transitivity and complex conjugation. |
| Sense | A nonreal-root pair count determines the entire conjugation permutation. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** G contains a5-cycle and a transposition. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Generate the full symmetric group

**Object, role, and local target:** Use conjugate transpositions as edges in a connected graph. The required export is: The exact Galois group isS₅.

**Inputs:** A5-cycleσ and transpositionτ inG; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain A5-cycleσ and transpositionτ inG; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Use conjugate transpositions as edges in a connected graph. |
| Sense | A cycle/transposition claim needs the connected-graph proof; it is not automatic for arbitrary cycle lengths. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** The exact Galois group isS₅. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

### N4/v1 — Nonsolvability and radical obstruction

**Object, role, and local target:** Prove the needed group obstruction before applying the field theorem. The required export is: This explicit quintic is not solvable by radicals; no radical formula covers every quintic.

**Inputs:** G=S₅; radical criterion; prior exports E3/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `MA-05.N4`; publish E4 only after the stated local target is established. |
| Memory | Retain G=S₅; radical criterion; prior exports E3/v1; keep their assumptions and versions attached. |
| Intellect | Prove the needed group obstruction before applying the field theorem. |
| Sense | Some quintics are solvable; the conclusion is not a claim about every individual quintic. |
| Action | Execute the numbered mathematical activities in §4.N4, including its displayed identities and logical implications. |

**Export E4/v1:** This explicit quintic is not solvable by radicals; no radical formula covers every quintic. Evidence is the authored argument in §4.N4, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N4 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E4, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E4. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Irreducibility and real-root count

1. Eisenstein at 2 applies: the coefficients0,0,0,−4,2 are divisible by 2 and the constant2 is not divisible by 4.

2. Thusf is irreducible.

3. Its derivative5x⁴−4 vanishes at±α whereα=(4/5)^{1/4}; it is positive outside and negative inside.

4. Since α>5/8, f(α)=2−(16/5)α<0 andf(−α)=2+(16/5)α>0.

5. The limits at−∞ and∞ are−∞ and∞.

6. Strict monotonicity on the three intervals therefore gives exactly three distinct real roots and two nonreal roots forming one conjugate pair.

7. Irreducibility over Q in characteristic zero supplies separability, so all five complex roots are distinct.

### §4.N2 — Two permutation types

1. Let G be the splitting-field Galois group acting faithfully on five roots.

2. Irreducibility gives a transitive action, so5 divides|G| by orbit–stabilizer.

3. Cauchy supplies an element of order5, necessarily a5-cycle inS₅.

4. Complex conjugation is an automorphism of the splitting field fixingQ; it fixes the three real roots and swaps the nonreal pair, hence is a transposition.

### §4.N3 — Generate the full symmetric group

1. Label the roots cyclically soσ acts by addition1 modulo5, and writeτ=(a,b) with nonzero differenceb−a mod5.

2. Its conjugatesσ^jτσ^(−j) swap the translated pairs(a+j,b+j).

3. These edges form a connected graph since repeated addition of a nonzero residue visits all five vertices.

4. Edge transpositions on a connected graph generate every transposition: along a path, conjugating the final edge swap by the preceding path swaps gives a swap between the endpoints.

5. All transpositions generateS₅, soS₅⊂G⊂S₅ andG=S₅.

### §4.N4 — Nonsolvability and radical obstruction

1. InA₅ the conjugacy-class sizes are1,15 (double transpositions),20 (3-cycles), and 12,12 (the two classes of 5-cycles).

2. They follow from cycle counting and centralizer sizes4,3,5 inA₅.

3. A normal subgroup is a union of these classes containing the identity, and its order divides60.

4. The possible such sums are1,13,25,16,28,40,21,33,45,36,48,60; only1 and 60 divide60.

5. Thus A₅ is simple.

6. It is nonabelian, so its nontrivial commutator subgroup, being normal, is allA₅; its derived series never reaches1.

7. Hence A₅, and thereforeS₅ which contains it, is not solvable.

8. By the imported radical criterion the quintic is not solvable by radicals.

9. A radical formula for every quintic would solve this one, contradiction.

## 5. Worked instance and boundary audit

The critical-point audit usesα≈0.9457 only as an illustration; the exact inequalityα>5/8 proves the signs. By contrastx⁵−2 is irreducible but has roots expressed by a fifth root and roots of unity, so irreducibility alone cannot imply nonsolvability.

**Boundary or failed-argument audit:**

A candidate exports “irreducible quintic⇒G=S₅.” Sense counters withx⁵−2 and with smaller transitive groups. The repaired route retains both the5-cycle and single transposition, proves connected generation, and only then invokes the radical obstruction.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `MA-05`, version 1, and the proof with every reuse. Intermediate exports E1–E4 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [MIT Algebra II notes: field extensions and Galois theory](https://ocw.mit.edu/courses/res-18-012-algebra-ii-student-notes-spring-2022/pages/student-notes/).

[Branch index](../README.md)
